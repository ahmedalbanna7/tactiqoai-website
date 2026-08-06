import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__constellation" aria-hidden="true">
        <i className="hero-shape hero-shape--star hero-shape--one" />
        <i className="hero-shape hero-shape--prism hero-shape--two" />
        <i className="hero-shape hero-shape--star hero-shape--three" />
        <i className="hero-shape hero-shape--diamond hero-shape--four" />
        <i className="hero-shape hero-shape--prism hero-shape--five" />
        <i className="hero-shape hero-shape--star hero-shape--six" />
        <i className="hero-shape hero-shape--diamond hero-shape--seven" />
        <i className="hero-shape hero-shape--prism hero-shape--eight" />
        <i className="hero-shape hero-shape--star hero-shape--nine" />
        <i className="hero-shape hero-shape--diamond hero-shape--ten" />
        <i className="hero-shape hero-shape--star hero-shape--eleven" />
        <i className="hero-shape hero-shape--prism hero-shape--twelve" />
      </div>
      <div className="hero__wordmark" aria-hidden="true"><span>Tactiqo</span><b>AI</b></div>
      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow"><span />AI Engineering Company</p>
        <p className="hero__statement">Beyond Software. <em>Into Intelligence.</em></p>
        <h1>Built to Think.<br /><span>Designed to Scale.</span></h1>
        <p className="hero__supporting">Intelligence at the core, powering businesses that lead.</p>
        <p className="hero__description">
          TactiqoAI builds complete intelligent systems that connect AI agents, RAG,
          automation, analytics, computer vision, knowledge, and modern software
          into one clear and scalable solution.
        </p>
        <div className="hero__actions">
          <Button href="#solutions">Explore Our Solutions</Button>
          <Button href="#contact" variant="ghost">Start an AI Project</Button>
        </div>
        <p className="hero__capabilities">Agentic AI <i /> AI Agents <i /> RAG <i /> Automation <i /> Analytics <i /> Computer Vision</p>
      </div>
      <a className="scroll-cue" href="#company" aria-label="Scroll to company section"><ArrowDown size={18} /></a>
    </section>
  );
}
