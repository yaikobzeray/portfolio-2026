const groups = [
  { label: "Languages", items: ["Dart", "Python", "Go", "Java", "JavaScript", "C++", "C#"] },
  { label: "Frameworks", items: ["Flutter", "Django", "FastAPI", "Laravel", "Spring Boot"] },
  { label: "Databases & Cloud", items: ["PostgreSQL", "MySQL", "Firebase"] },
  { label: "Architecture", items: ["Clean Architecture", "MVVM", "BLoC", "Docker"] },
];

export function Skills() {
  return (
    <div className="space-y-8">
      {groups.map((g) => (
        <div key={g.label} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pt-2">
            {g.label}
          </p>
          <ul className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-mono text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
