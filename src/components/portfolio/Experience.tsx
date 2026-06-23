const items = [
  {
    role: "Software Engineer",
    company: "Power Ethiopia Plc",
    location: "Addis Ababa, Ethiopia",
    period: "Sep 2024 – Jun 2025",
    bullets: [
      "Built a solar education mobile app from scratch (Flutter) via Play Store release, delivering courses, authentication, and progress tracking via a REST API integration layer.",
      "Created a shared Flutter component library reused across mobile and web, reducing per-screen development overhead.",
    ],
    tags: ["Flutter", "Dart", "REST API", "Play Store"],
  },
  {
    role: "Software Engineer — Internship",
    company: "Awura Tech Plc",
    location: "Addis Ababa, Ethiopia",
    period: "Mar 2023 – Jun 2023",
    bullets: [
      "Built a production event management app (Owl Events), live on Google Play Store, providing end-to-end digital ticketing (discovery, purchase, real-time QR validation) in a 4-role stakeholder system.",
      "Decoupled domain logic from UI using Clean Architecture to make the QR validation module testable independently of the live event infrastructure.",
    ],
    tags: ["Flutter", "Clean Architecture", "QR"],
  },
  {
    role: "Mobile App Developer — Internship",
    company: "HealthPilot Technologies",
    location: "Nashville, Tennessee, USA",
    period: "Oct 2022 – Oct 2023",
    bullets: [
      "Designed and built the entire mobile frontend from Figma prototypes.",
      "Established a modular MVVM architecture with strict separation of UI/business logic across all screens.",
      "Developed patient-doctor matchmaking modules and localized BLoC state management workflows for seamless user data sync and zero memory leaks.",
    ],
    tags: ["Flutter", "MVVM", "BLoC", "Figma"],
  },
];

export function Experience() {
  return (
    <ol className="space-y-10">
      {items.map((it) => (
        <li
          key={it.company}
          className="group relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {it.period}
          </p>
          <h3 className="mt-2 text-2xl text-foreground">
            {it.role}{" "}
            <span className="text-primary">· {it.company}</span>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground font-mono">
            {it.location}
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground max-w-2xl">
            {it.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-2">
            {it.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
