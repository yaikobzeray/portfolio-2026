const education = [
  {
    degree: "MSc Computer Science",
    school: "University of Salzburg",
    period: "2025 – 2027",
    note: "Focus: Data mining and ML engineering",
  },
  {
    degree: "BSc Software Engineering",
    school: "Arbaminch University",
    period: "2019 – 2024",
    note: "GPA 3.83/4.00 · Great Distinction · Dean's List",
  },
];

const certs = ["IBM CI/CD", "Google Cloud Core Infrastructure", "GKE — Architecting with Kubernetes"];
const langs = [
  { name: "Amharic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "German", level: "A1" },
];

export function Education() {
  return (
    <div className="space-y-12">
      <ol className="space-y-8">
        {education.map((e) => (
          <li key={e.degree} className="pl-6 border-l-2 border-border hover:border-primary transition-colors">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {e.period}
            </p>
            <h3 className="mt-2 text-2xl text-foreground">{e.degree}</h3>
            <p className="mt-1 text-sm text-primary font-mono">{e.school}</p>
            <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>
          </li>
        ))}
      </ol>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            Certifications
          </p>
          <ul className="space-y-2">
            {certs.map((c) => (
              <li key={c} className="text-sm text-muted-foreground flex gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            Languages
          </p>
          <ul className="space-y-2">
            {langs.map((l) => (
              <li key={l.name} className="text-sm text-foreground flex justify-between border-b border-border pb-2 max-w-xs">
                <span>{l.name}</span>
                <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
