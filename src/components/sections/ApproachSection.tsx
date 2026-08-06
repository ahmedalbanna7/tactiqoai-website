import { Cloud, Combine, LockKeyhole, Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardDepth } from "@/components/ui/CardDepth";

const pillars = [
  ["Built Around Real Needs", "Every solution begins with the real problem, the people using it, and the result the organization wants.", Maximize2],
  ["Intelligence with Control", "AI agents work within defined permissions, rules, approval points, and monitored workflows.", LockKeyhole],
  ["Designed to Grow", "New users, data sources, agents, workflows, and capabilities can be added over time.", Combine],
  ["Clear and Reliable", "We focus on useful results, simple experiences, testing, monitoring, security, and continuous improvement.", Cloud],
] as const;

export function ApproachSection() {
  return (
    <section className="section approach" id="approach">
      <div className="container">
        <SectionHeading
          eyebrow="Our Approach"
          title="Advanced AI. Clear Experience. Reliable Delivery."
          description="Complex capability should lead to a clear, useful experience for the people who rely on it."
        />
        <div className="approach__grid">
          {pillars.map(([title, description, Icon], index) => (
            <article className="approach-card reveal" key={title}>
              <span>0{index + 1}</span><Icon size={24} /><h3>{title}</h3><p>{description}</p><CardDepth />
            </article>
          ))}
        </div>
        <div className="deployment reveal">
          <div>
            <p className="eyebrow"><span />Flexible Deployment</p>
            <h3>Built for the environment that fits.</h3>
            <p>Solutions can run in cloud, hybrid, and on-premise environments based on privacy, control, and internal policy needs.</p>
          </div>
          <div className="deployment__options">
            <span><b>Cloud</b>Full or selected services using cloud infrastructure.</span>
            <span><b>Hybrid</b>Private systems stay internal with controlled AI connections.</span>
            <span><b>On-Premise</b>Deployed inside the organization&apos;s own infrastructure.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
