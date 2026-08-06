"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { applications } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardDepth } from "@/components/ui/CardDepth";

const industries = ["Sports", "Construction", "Education", "Government", "Healthcare", "Manufacturing", "Finance", "Human Resources", "Consulting", "Logistics", "Retail", "Real Estate", "Energy", "Technology", "Media", "Any Industry"];

export function ApplicationsSection() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => applications.filter(([title, description]) => `${title} ${description}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <section className="section applications" id="applications">
      <div className="container">
        <div className="applications__heading">
          <SectionHeading
            eyebrow="Applications"
            title="Intelligence That Adapts to Every Industry"
            description="Different industries use different terminology, documents, and workflows, but share the same needs: knowledge, decisions, risk control, automation, assistance, reporting, and intelligent operations."
          />
          <p className="reveal">TactiqoAI adapts the system, agents, knowledge, workflows, and interfaces around each organization&apos;s goals and working environment.</p>
        </div>
        <div className="industry-orbit reveal" aria-label="Industries connected to one intelligent foundation">
          <div className="industry-orbit__core">ONE<span>INTELLIGENT<br />FOUNDATION</span></div>
          <div className="industry-orbit__track" aria-hidden="true">
            {industries.map((industry) => <span key={industry}>{industry}</span>)}
          </div>
        </div>
        <label className="application-search reveal">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search applications</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find an application…" />
          <small>{filtered.length} applications</small>
        </label>
        <div className="applications__grid">
          {filtered.map(([title], index) => (
            <article className="application-card reveal" key={title}>
              <small>{String(index + 1).padStart(2, "0")}</small><h3>{title}</h3><CardDepth />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
