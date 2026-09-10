import { profile } from "../data/profileData.js";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-16">
      <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(profile.skills).map(([category, items]) => (
          <div key={category} className="glass rounded-3xl p-6">
            <h3 className="text-xl font-bold text-cyan-200">{category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
