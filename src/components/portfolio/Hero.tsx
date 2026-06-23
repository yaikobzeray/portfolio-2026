import { ArrowDown, Download } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const CV_URL = "https://drive.google.com/file/d/1GQ7PzGAzI9aTKwsppUJqQVZn0tIWpkOB/view";

function scrollToProjects(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document
    .getElementById("projects")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", "#projects");
}

function CTAs() {
  return (
    <>
      <a
        href="#projects"
        onClick={scrollToProjects}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-mono text-primary-foreground hover:opacity-90 transition"
      >
        View Projects <ArrowDown className="h-4 w-4" />
      </a>
      <a
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-mono text-foreground hover:border-primary hover:text-primary transition"
      >
        View CV <Download className="h-4 w-4" />
      </a>
    </>
  );
}

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="section-fade pt-4 pb-12 lg:hidden">
      <div className="flex flex-wrap gap-3">
        <CTAs />
      </div>
    </div>
  );
}

export function HeroDesktop() {
  return (
    <div className="hidden lg:flex flex-wrap gap-3 mb-4">
      <CTAs />
    </div>
  );
}
