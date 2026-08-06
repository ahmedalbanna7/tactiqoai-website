import { CheckCircle2 } from "lucide-react";
import { trustItems } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardDepth } from "@/components/ui/CardDepth";

const statuses = [
  ["Agent workflow", "Controlled"], ["Human approval", "Enabled"], ["Knowledge retrieval", "Active"],
  ["Guardrails", "Applied"], ["Monitoring", "Active"], ["System status", "Operational"],
];

export function TrustSection() {
  return (
    <section className="section trust" id="trust">
      <div className="container trust__layout">
        <div>
          <SectionHeading
            eyebrow="Built for Real Use"
            title="Controlled. Clear. Monitored."
            description="Modern AI systems need more than strong models. They need control, clear responsibilities, monitoring, validation, human oversight, and reliable workflows."
          />
          <div className="trust__cards">
            {trustItems.map(([title, description, Icon]) => (
              <article className="trust-card reveal" key={title}><Icon size={19} /><div><h3>{title}</h3><p>{description}</p></div><CardDepth /></article>
            ))}
          </div>
        </div>
        <aside className="trust-console reveal" aria-label="Illustrative system controls">
          <div className="trust-console__top"><span><i /><i /><i /></span><small>TACTIQO / CONTROL</small></div>
          <div className="trust-console__core"><span /><b>System<br />Operational</b><i /></div>
          <div className="trust-console__statuses">
            {statuses.map(([label, status]) => <p key={label}><span>{label}</span><b><CheckCircle2 size={13} />{status}</b></p>)}
          </div>
          <small>Illustrative system status</small>
        </aside>
      </div>
    </section>
  );
}
