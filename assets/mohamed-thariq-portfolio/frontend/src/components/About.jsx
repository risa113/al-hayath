import { profile } from "../data/profileData.js";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16">
      <div className="glass rounded-3xl p-8 md:p-10">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
          I am an Artificial Intelligence and Data Science undergraduate focused on full-stack web development, product development, and building practical digital solutions for real users. I enjoy creating responsive websites, business platforms, and smart web apps with clean UI and useful backend systems.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-5">
            <p className="text-sm text-slate-400">Email</p>
            <p className="font-semibold">{profile.email}</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-5">
            <p className="text-sm text-slate-400">Phone</p>
            <p className="font-semibold">{profile.phone}</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-5">
            <p className="text-sm text-slate-400">Location</p>
            <p className="font-semibold">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
