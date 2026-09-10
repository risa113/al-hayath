import { profile } from "../data/profileData.js";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-16">
      <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {profile.projects.map((project) => (
          <article key={project.title} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
            <p className="text-sm text-cyan-200">{project.category}</p>
            <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
