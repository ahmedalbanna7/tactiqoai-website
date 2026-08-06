import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Brand } from "@/components/ui/Brand";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__lead">
          <Brand />
          <p className="footer__position">AI Engineering Company</p>
          <p>We design, build, deploy, and operate complete intelligent systems.</p>
        </div>
        <div>
          <p className="footer__label">Navigate</p>
          {siteConfig.navigation.slice(1).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </div>
        <div>
          <p className="footer__label">Connect</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight size={14} /></a>
          <a href={siteConfig.linkedIn}>LinkedIn <span>Placeholder</span></a>
          <a href="#">Privacy <span>Placeholder</span></a>
          <a href="#">Terms <span>Placeholder</span></a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>TactiqoAI — Engineering Intelligent Systems.</p>
        <a className="footer__bottom-email" href={`mailto:${siteConfig.email}`}>Contact: {siteConfig.email}</a>
        <p>Beyond Software. Into Intelligence.</p>
      </div>
    </footer>
  );
}
