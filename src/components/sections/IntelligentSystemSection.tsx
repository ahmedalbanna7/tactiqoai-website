import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const flow = [
  { title: "People & business needs", items: ["User Roles", "Business Goals", "Pain Points", "Approvals"] },
  { title: "Knowledge & information", items: ["Documents", "Policies", "Data Sources", "Reports"] },
  { title: "Intelligence layer", items: ["AI Agents", "RAG", "LLMs", "Agentic AI", "Analytics", "Decision Intelligence"] },
  { title: "Workflows & actions", items: ["Routing", "Automations", "Notifications", "Human Review"] },
  { title: "Insights & results", items: ["Dashboards", "Recommendations", "Risk Signals", "Reports"] },
];

export function IntelligentSystemSection() {
  return (
    <section className="section system" id="intelligent-system">
      <div className="container">
        <SectionHeading
          eyebrow="One Connected System"
          title="Not Just an AI Feature. A Complete Intelligent Solution."
          description="TactiqoAI connects user experiences, knowledge, AI agents, automation, analytics, data, and intelligent actions into one complete solution."
          align="center"
        />
        <div className="system-flow reveal">
          {flow.map((stage, index) => (
            <div className={`system-flow__item ${index === 2 ? "system-flow__item--core" : ""}`} key={stage.title}>
              <small>0{index + 1}</small><strong>{stage.title}</strong>
              <div>{stage.items.map((label) => <span key={label}>{label}</span>)}</div>
              {index < flow.length - 1 ? <ArrowRight aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
        <div className="system-active reveal"><CheckCircle2 size={18} />Intelligent System: <strong>Active</strong><span /></div>
      </div>
    </section>
  );
}
