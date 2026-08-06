import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const inputs = ["Documents", "Applications", "Projects", "Data", "Images", "Videos", "Processes", "Team requests"];
const outputs = ["Decisions", "Actions", "Knowledge", "Insights", "Predictions", "Reports"];

export function CompanySection() {
  return (
    <section className="section company" id="company">
      <div className="container company__grid">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Building the Systems of the Intelligence Age"
            description="TactiqoAI is an AI engineering company focused on building complete intelligent systems that understand information, connect knowledge, coordinate work, support decisions, and automate complex processes."
          />
          <p className="company__copy reveal">
            We combine software engineering, AI agents, RAG, analytics, automation,
            computer vision, and intelligent workflows to create systems around real business needs.
          </p>
          <blockquote className="reveal">We do not add AI as a small feature. We build intelligence into the complete system.</blockquote>
        </div>
        <div className="transform-visual reveal" aria-label="Information transformed into intelligent outcomes">
          <div className="transform-column">
            <p>Information In</p>
            {inputs.map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="transform-core">
            <div className="mini-core"><i /><b /><em /></div>
            <ArrowRight aria-hidden="true" />
            <small>Intelligence Core</small>
          </div>
          <div className="transform-column transform-column--output">
            <p>Intelligence Out</p>
            {outputs.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

