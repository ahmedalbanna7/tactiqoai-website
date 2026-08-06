import { processSteps } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardDepth } from "@/components/ui/CardDepth";

export function ProcessSection() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHeading eyebrow="How We Build" title="From Business Challenge to Working Intelligence" />
        <div className="process__path">
          {processSteps.map(([number, title, description]) => (
            <article className="process-step reveal" key={title}>
              <span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><CardDepth />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
