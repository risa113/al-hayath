import { profile } from "../data/profileData.js";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <h2 className="section-title">Certifications & <span className="gradient-text">Languages</span></h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h3 className="text-2xl font-bold">Certifications</h3>
          <div className="mt-5 space-y-3">
            {profile.certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <Award className="text-cyan-200" size={20} />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="text-2xl font-bold">Languages Known</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {profile.languages.map((lang) => (
              <span key={lang} className="rounded-full bg-white/10 px-5 py-2">{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
