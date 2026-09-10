import { motion } from "framer-motion";
import { Download, Mail, Linkedin } from "lucide-react";
import { profile } from "../data/profileData.js";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 px-4 py-2 text-sm text-cyan-200">
          Available for Web Development & Product Development
        </p>
        <h1 className="text-4xl font-black leading-tight md:text-6xl">
          Hi, I am <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="mt-5 text-xl text-slate-300">{profile.title}</p>
        <p className="mt-6 max-w-xl text-slate-400">{profile.objective}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200">
            <Download size={18} /> Download Resume
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-white hover:bg-white/10">
            <Mail size={18} /> Hire Me
          </a>
          <a href={profile.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-white hover:bg-white/10">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative mx-auto">
        <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/20 blur-3xl" />
        <div className="glass relative overflow-hidden rounded-[2rem] p-4 shadow-2xl">
          <img src="/profile.png" alt="Mohamed Thariq H" className="h-[430px] w-[350px] rounded-[1.5rem] object-cover object-top" />
        </div>
      </motion.div>
    </section>
  );
}
