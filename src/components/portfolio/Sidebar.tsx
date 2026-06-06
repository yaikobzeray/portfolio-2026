import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

const navIds = nav.map((n) => n.id);

export function Sidebar() {
  const active = useScrollSpy(navIds, 140);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:py-24 flex flex-col justify-between gap-12 py-12">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6 font-mono">
          // Portfolio · 2026
        </p>
        <h1 className="text-4xl md:text-5xl leading-[1.05] text-foreground">
          Yaikob Zeray<br />Teklehayimanot
        </h1>
        <p className="mt-4 text-base text-muted-foreground font-mono">
          Software Engineer
        </p>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Production engineer shipping cross-platform apps in healthcare,
          energy, e-commerce &amp; entertainment.
        </p>

        <nav className="hidden lg:block mt-12" aria-label="Section navigation">
          <ul className="space-y-3">
            {nav.map((n) => {
              const isActive = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={(e) => handleNav(e, n.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-primary"
                          : "w-8 bg-border group-hover:w-16 group-hover:bg-primary"
                      }`}
                    />
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="space-y-3 text-sm font-mono">
        <li>
          <a
            href="mailto:yaikobzeray@gmail.com"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>yaikobzeray@gmail.com</span>
          </a>
        </li>
        <li className="inline-flex items-center gap-3 text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>+43 677 63130434</span>
        </li>
        <li className="inline-flex items-center gap-3 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Salzburg, Austria</span>
        </li>
        <li>
          <a
            href="https://github.com/yaikobzeray"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>github.com/yaikobzeray</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/yaikob-zeray"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span>yaikob-zeray</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
