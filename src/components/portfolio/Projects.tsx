import { Github, Play, ArrowUpRight } from "lucide-react";

type ProjectLink = { type: "github" | "play"; href: string; label: string };

const projects: Array<{
  name: string;
  tagline: string;
  stack: string[];
  body: string;
  links: ProjectLink[];
}> = [
    {
      name: "Zmare",
      tagline: "Music Streaming App",
      stack: ["Flutter", "Dart", "Laravel"],
      body:
        "Co-engineered a feature-rich audio streaming client with playlist management, queue control, and continuous playback against a Laravel REST backend. Centralized audio logic in a singleton BLoC controller to eliminate playback state bugs.",
      links: [
        {
          type: "github",
          href: "https://github.com/Menfesawi-Zmare/zmare-Mobile-APP",
          label: "Zmare on GitHub",
        },
      ],
    },
    {
      name: "WapTrend",
      tagline: "Social Platform",
      stack: ["Flutter", "Dart"],
      body:
        "Built core social features: feed, user profiles, follow mechanism, and post interactions using composable Flutter widgets. Used paginated ListView and lazy image loading for smooth performance.",
      links: [
        {
          type: "github",
          href: "https://github.com/yaikobzeray/waptrend-app",
          label: "WapTrend on GitHub",
        },
      ],
    },
    {
      name: "N-Grocery",
      tagline: "Grocery Delivery Platform",
      stack: ["Flutter", "Dart", "Dual-app"],
      body:
        "Built two Flutter apps (customer + vendor) connected through a common REST API backend. Covered product browsing, cart, checkout, live order tracking, and vendor management.",
      links: [
        {
          type: "play",
          href: "https://www.youtube.com/shorts/UDgKpptus2c?feature=share",
          label: "N-Grocery Demo",
        },
      ],
    },
    {
      name: "Power Ethiopia",
      tagline: "Solar Education Platform",
      stack: ["Flutter", "Dart", "REST API"],
      body:
        "Built a solar education mobile app from scratch (Flutter) via Play Store release, delivering courses, authentication, and progress tracking via a REST API integration layer.",
      links: [
        {
          type: "play",
          href: "https://play.google.com/store/apps/details?id=com.ethiopower.app&pcampaignid=web_share",
          label: "Power Ethiopia on Google Play",
        },
      ],
    },
    {
      name: "Owl Events",
      tagline: "Event Management App",
      stack: ["Flutter", "Dart", "Clean Architecture"],
      body:
        "Production app live on Google Play Store. End-to-end digital ticketing with QR validation in a 4-role stakeholder system.",
      links: [
        {
          type: "play",
          href: "https://play.google.com/store/search?q=owl+events&c=apps",
          label: "Owl Events on Google Play",
        },
      ],
    },
  ];

export function Projects() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((p) => (
        <article
          key={p.name}
          className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:accent-glow"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm font-mono text-primary">{p.tagline}</p>
            </div>
            <div className="flex items-center gap-2">
              {p.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="rounded-full border border-border p-2 text-muted-foreground transition-colors group-hover:border-primary hover:text-primary"
                >
                  {link.type === "github" ? (
                    <Github className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {p.body}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
          <ArrowUpRight className="absolute bottom-5 right-5 h-4 w-4 text-border transition-colors group-hover:text-primary" />
        </article>
      ))}
    </div>
  );
}
