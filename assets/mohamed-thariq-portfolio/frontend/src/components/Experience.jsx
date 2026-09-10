import { profile } from "../data/profileData.js";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-16">
      <h2 className="section-title">Education & <span className="gradient-text">Experience</span></h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h3 className="text-2xl font-bold">Education</h3>
          <div className="mt-5 space-y-5">
            {profile.education.map((edu) => (
              <div key={edu.degree} className="border-l border-cyan-300/30 pl-4">
                <h4 className="font-bold">{edu.degree}</h4>
                <p className="text-slate-300">{edu.institution}</p>
                <p className="text-sm text-slate-400">{edu.period} | {edu.score}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="text-2xl font-bold">Internship</h3>
          <div className="mt-5 space-y-5">
            {profile.internships.map((item) => (
              <div key={item.company} className="border-l border-violet-300/30 pl-4">
                <h4 className="font-bold">{item.role}</h4>
                <p className="text-slate-300">{item.company}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-400">
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
