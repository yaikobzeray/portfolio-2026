import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { Hero, HeroDesktop } from "@/components/portfolio/Hero";
import { Section } from "@/components/portfolio/Section";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";

const TITLE = "Yaikob Zeray — Flutter Developer · Salzburg";
const DESCRIPTION =
  "Flutter & cross-platform mobile engineer in Salzburg, Austria. Shipped production apps in healthcare, energy, and e-commerce. MSc CS at University of Salzburg.";
const OG_IMAGE = "https://yaikob.tech/og-image.png";
const CANONICAL = "https://yaikob.tech/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "en_US" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: CANONICAL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Subtle grid backdrop — decorative, hidden from a11y tree */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="lg:grid lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-20">
          {/* Sidebar acts as the persistent header/identity on desktop */}
          <Sidebar />

          <main id="main-content" className="py-12 lg:py-24">
            {/* Mobile CTA buttons */}
            <Hero />
            {/* Desktop CTA buttons (above the fold) */}
            <HeroDesktop />

            <Section id="about" label="01 / About" heading="About">
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                A software engineer who developed and shipped cross-platform applications in
                healthcare, energy, e-commerce and entertainment. Experience owning full
                delivery cycles from architecture to deployment with cross-functional teams.{" "}
                <span className="text-foreground">
                  MSc Computer Science student at University of Salzburg.
                </span>{" "}
                Focus: Data mining and ML engineering.
              </p>
            </Section>

            <Section id="experience" label="02 / Experience" heading="Experience">
              <Experience />
            </Section>

            <Section id="projects" label="03 / Selected Projects" heading="Selected Projects">
              <Projects />
            </Section>

            <Section id="skills" label="04 / Skills" heading="Skills">
              <Skills />
            </Section>

            <Section id="education" label="05 / Education & More" heading="Education">
              <Education />
            </Section>

            <footer className="mt-16 border-t border-border pt-8 pb-12" role="contentinfo">
              <p className="font-mono text-xs text-muted-foreground">
                © 2026 Yaikob Zeray Teklehayimanot · Salzburg, Austria.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

