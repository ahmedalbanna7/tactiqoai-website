"use client";

import { useState } from "react";
import { Check, Database, FileText, Search, UserCheck, Wrench } from "lucide-react";
import { agentCapabilities } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardDepth } from "@/components/ui/CardDepth";

const agentNodes = ["Knowledge", "Research", "Operations", "Project", "Risk", "Reporting"];

export function AgenticAISection() {
  const [active, setActive] = useState(0);
  return (
    <section className="section agentic" id="intelligent-workflows">
      <div className="container">
        <SectionHeading
          eyebrow="How Intelligence Works"
          title="Intelligence That Understands, Plans, Coordinates, and Acts"
          description="Modern intelligent systems go beyond answering questions. They understand a goal, break it into steps, select the right capabilities, retrieve knowledge, complete workflows, and involve people when approval is required."
        />
        <div className="agentic__stage reveal">
          <div className="orchestrator" aria-label="Interactive AI orchestrator">
            <div className="orchestrator__rings" aria-hidden="true"><i /><i /><i /></div>
            <div className="orchestrator__core">
              <span>AI</span>
              <strong>Orchestrator</strong>
              <small>Coordinating 6 agents</small>
            </div>
            {agentNodes.map((agent, index) => (
              <button
                className={`agent-node agent-node--${index + 1} ${active === index ? "is-active" : ""}`}
                key={agent}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
              >
                <span>{index + 1}</span>{agent}
              </button>
            ))}
            <div className="agentic__status">
              <span><i /> Goal received</span><b>Routing to {agentNodes[active]} Agent</b>
            </div>
          </div>
          <div className="agentic__flow">
            <p><span>01</span> Business goal</p>
            <p><span>02</span> Plan & task routing</p>
            <p><span>03</span> Specialized agents</p>
            <p><span>04</span> Tools, data & RAG</p>
            <p><span>05</span> Human approval</p>
            <p><span>06</span> Action, insight or decision</p>
          </div>
        </div>
        <div className="agentic__capabilities">
          {agentCapabilities.map(({ title, description, icon: Icon }) => (
            <article key={title} className="agent-capability reveal">
              <Icon size={19} aria-hidden="true" /><h3>{title}</h3><p>{description}</p><CardDepth />
            </article>
          ))}
        </div>
        <div className="harness-strip reveal">
          <div><span className="status-dot" />Agent Harness: active</div>
          <span><Wrench size={14} />Tools</span><span><Database size={14} />Memory</span>
          <span><Search size={14} />RAG</span><span><FileText size={14} />Context</span>
          <span><UserCheck size={14} />Approval</span><span><Check size={14} />Validation</span>
        </div>
      </div>
    </section>
  );
}
