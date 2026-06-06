import { type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className="section-fade scroll-mt-12 py-16 first:pt-0"
      aria-labelledby={`${id}-heading`}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {label}
        </span>
        <span className="hairline flex-1" />
      </div>
      {children}
    </section>
  );
}
