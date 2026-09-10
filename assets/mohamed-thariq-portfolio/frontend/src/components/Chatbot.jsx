import { useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { profile } from "../data/profileData.js";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function localAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes("skill")) return `Mohamed Thariq knows ${Object.values(profile.skills).flat().join(", ")}.`;
  if (q.includes("education") || q.includes("college")) return "He is pursuing B.Tech in Artificial Intelligence and Data Science at Francis Xavier Engineering College, Tirunelveli.";
  if (q.includes("project")) return `His projects include ${profile.projects.map(p => p.title).join(", ")}.`;
  if (q.includes("contact") || q.includes("email") || q.includes("phone")) return `You can contact him at ${profile.email} or ${profile.phone}.`;
  if (q.includes("intern")) return "He completed a Web Development internship at Brassy Academy, Tirunelveli.";
  if (q.includes("hire") || q.includes("website")) return "Yes, Mohamed Thariq can build responsive portfolio websites, business websites, and full-stack web applications.";
  if (q.includes("resume")) return "You can download his resume using the Download Resume button in the hero section.";

  return "I can answer questions about Mohamed Thariq's skills, education, projects, internship, contact details, and web development services.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi, I am Mohamed Thariq's portfolio assistant. Ask me about his skills, projects, education, or contact details." }
  ]);

  const send = async () => {
    if (!input.trim()) return;
    const question = input.trim();
    const answer = localAnswer(question);
    setMessages((m) => [...m, { role: "user", text: question }, { role: "bot", text: answer }]);
    setInput("");

    try {
      await fetch(`${API}/chatbot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer })
      });
    } catch {
      // chatbot still works locally even if backend is offline
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300 text-slate-950 shadow-xl hover:bg-cyan-200">
        <Bot />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <div className="flex items-center gap-2 font-bold"><Bot size={20} /> Portfolio Assistant</div>
            <button onClick={() => setOpen(false)}><X size={20} /></button>
          </div>
          <div className="h-80 space-y-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div key={i} className={`rounded-2xl p-3 text-sm ${msg.role === "user" ? "ml-10 bg-cyan-300 text-slate-950" : "mr-10 bg-white/10 text-slate-100"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t border-white/10 p-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Ask something..." className="flex-1 rounded-2xl bg-white/10 px-4 py-3 text-sm outline-none" />
            <button onClick={send} className="rounded-2xl bg-cyan-300 px-4 text-slate-950"><Send size={18} /></button>
          </div>
        </div>
      )}
    </>
  );
}
