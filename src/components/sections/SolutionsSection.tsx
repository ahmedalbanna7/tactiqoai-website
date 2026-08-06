import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardDepth } from "@/components/ui/CardDepth";

export function SolutionsSection() {
  return (
    <section className="section solutions" id="solutions">
      <div className="container">
        <SectionHeading
          eyebrow="What We Build"
          title="Complete Intelligent Systems"
          description="We build connected AI solutions that understand knowledge, coordinate tasks, automate workflows, analyze data, and support people with clear and useful intelligence."
        />
        <div className="solutions__grid">
          {solutions.map(({ title, description, icon: Icon }, index) => (
            <article className="solution-card reveal" key={title} tabIndex={0}>
              <div className="solution-card__top">
                <span className="solution-card__icon"><Icon size={22} aria-hidden="true" /></span>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="solution-card__link">Explore capability <ArrowUpRight size={15} /></span>
              <CardDepth />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
