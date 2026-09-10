import { useState } from "react";
import { profile } from "../data/profileData.js";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Failed");
      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus("Message sent successfully.");
    } catch {
      setStatus("Backend not connected. Start backend server or check API URL.");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
          <p className="mt-5 text-slate-300">Need a website, portfolio, business platform, or web app? Send an enquiry here.</p>
          <div className="mt-8 space-y-3 text-slate-300">
            <p>Email: <a className="text-cyan-200" href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p>Phone: <a className="text-cyan-200" href={`tel:${profile.phone}`}>{profile.phone}</a></p>
          </div>
        </div>
        <form onSubmit={submit} className="glass rounded-3xl p-6">
          <input className="mb-4 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300" placeholder="Your Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
          <input className="mb-4 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300" placeholder="Your Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
          <input className="mb-4 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300" placeholder="Subject" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} required />
          <textarea className="mb-4 h-32 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300" placeholder="Message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} required />
          <button className="w-full rounded-2xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-200">Send Message</button>
          {status && <p className="mt-4 text-sm text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
