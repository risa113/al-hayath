import { useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Admin({ goHome }) {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  const [login, setLogin] = useState({ email: "", password: "" });
  const [contacts, setContacts] = useState([]);
  const [chats, setChats] = useState([]);
  const [status, setStatus] = useState("");

  const doLogin = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      localStorage.setItem("adminToken", data.token);
      setToken(data.token);
      setStatus("");
    } catch (err) {
      setStatus(err.message);
    }
  };

  const loadData = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const [cRes, chRes] = await Promise.all([
        fetch(`${API}/contact`, { headers }),
        fetch(`${API}/chatbot`, { headers })
      ]);
      setContacts(await cRes.json());
      setChats(await chRes.json());
    } catch {
      setStatus("Unable to load data. Check backend and token.");
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
          <button onClick={goHome} className="mb-6 text-cyan-200">← Back to Portfolio</button>
          <h1 className="text-3xl font-bold">Admin Login</h1>
          <form onSubmit={doLogin} className="mt-6 space-y-4">
            <input className="w-full rounded-2xl bg-slate-900 px-4 py-3 outline-none" placeholder="Admin Email" value={login.email} onChange={(e) => setLogin({...login, email: e.target.value})} />
            <input type="password" className="w-full rounded-2xl bg-slate-900 px-4 py-3 outline-none" placeholder="Password" value={login.password} onChange={(e) => setLogin({...login, password: e.target.value})} />
            <button className="w-full rounded-2xl bg-cyan-300 px-4 py-3 font-bold text-slate-950">Login</button>
          </form>
          {status && <p className="mt-4 text-sm text-red-300">{status}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <button onClick={goHome} className="mb-3 text-cyan-200">← Back to Portfolio</button>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          </div>
          <div className="flex gap-3">
            <button onClick={loadData} className="rounded-full bg-cyan-300 px-5 py-2 font-bold text-slate-950">Load Data</button>
            <button onClick={logout} className="rounded-full border border-white/15 px-5 py-2">Logout</button>
          </div>
        </div>

        {status && <p className="mt-4 text-red-300">{status}</p>}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Contact Enquiries</h2>
            <div className="mt-5 space-y-4">
              {contacts.map((item) => (
                <div key={item._id} className="rounded-2xl bg-slate-900 p-4">
                  <p className="font-bold">{item.name} - {item.subject}</p>
                  <p className="text-sm text-cyan-200">{item.email}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.message}</p>
                </div>
              ))}
              {contacts.length === 0 && <p className="text-slate-400">No enquiries loaded.</p>}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Chatbot Questions</h2>
            <div className="mt-5 space-y-4">
              {chats.map((item) => (
                <div key={item._id} className="rounded-2xl bg-slate-900 p-4">
                  <p className="font-bold">Q: {item.question}</p>
                  <p className="mt-2 text-sm text-slate-300">A: {item.answer}</p>
                </div>
              ))}
              {chats.length === 0 && <p className="text-slate-400">No chat logs loaded.</p>}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
