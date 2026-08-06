import { ArrowUpRight, FileText, Flag, ShieldAlert } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CardDepth } from "@/components/ui/CardDepth";

const footballFeatures = ["Match video processing", "Player detection & tracking", "Team classification", "Event detection", "Formation analysis", "Performance analytics", "Automated reports"];
const pmoFeatures = ["Project knowledge", "Document intelligence", "Specialized agents", "Risk monitoring", "Workflow automation", "Human approvals", "Executive insights"];

function FootballVisual() {
  return (
    <div className="pitch" aria-hidden="true">
      <i className="pitch__line pitch__line--middle" /><i className="pitch__circle" />
      {[1, 2, 3, 4, 5, 6, 7, 8].map((node) => <span className={`player player--${node}`} key={node} />)}
      <b className="scan-line" />
      <small>Live tactical model</small>
    </div>
  );
}

function PmoVisual() {
  const nodes = [FileText, ShieldAlert, Flag, FileText, Flag, ShieldAlert];
  return (
    <div className="pmo-network" aria-hidden="true">
      <div className="pmo-network__core">PMO<span>AI</span></div>
      {nodes.map((Icon, index) => <i className={`pmo-node pmo-node--${index + 1}`} key={index}><Icon size={15} /></i>)}
      <small>12 workflows monitored</small>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section className="section products" id="products">
      <div className="container">
        <SectionHeading
          eyebrow="Intelligence in Action"
          title="Focused AI Products. Real-World Applications."
          description="Alongside custom AI solutions, TactiqoAI develops focused products that show how intelligent systems can solve complex problems in specialized areas."
        />
        <div className="products__shell reveal">
          <article className="product">
            <CardDepth />
            <FootballVisual />
            <p className="product__number">PRODUCT / 01</p>
            <h3>Football Intelligence Platform</h3>
            <p>An AI-powered platform that transforms match video into player tracking, identity, tactical analysis, performance data, and actionable football insights.</p>
            <div className="product__tags">{footballFeatures.map((item) => <span key={item}>{item}</span>)}</div>
            <a href="#contact">Explore Football Intelligence <ArrowUpRight size={17} /></a>
          </article>
          <article className="product">
            <CardDepth />
            <PmoVisual />
            <p className="product__number">PRODUCT / 02</p>
            <h3>Project & Operations Intelligence</h3>
            <p>An Agentic AI platform connecting projects, documents, teams, risks, workflows, and operational information for knowledge, monitoring, automation, and decision support.</p>
            <div className="product__tags">{pmoFeatures.map((item) => <span key={item}>{item}</span>)}</div>
            <a href="#contact">Explore PMO Intelligence <ArrowUpRight size={17} /></a>
          </article>
        </div>
      </div>
    </section>
  );
}
