"use client";

import { useEffect, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ExperienceShell({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), reduced ? 80 : 1050);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    const context = gsap.context(() => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 34 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } },
        );
      });
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      context.revert();
    };
  }, [reduced]);

  return (
    <>
      <div className={`intro-loader ${loading ? "" : "intro-loader--done"}`} aria-hidden={!loading}>
        <div className="intro-loader__symbol"><i /><b /></div>
        <p>Initializing Intelligence</p>
        <span><i /></span>
      </div>
      <div className="ai-atmosphere" aria-hidden="true">
        <i className="ai-atmosphere__star ai-atmosphere__star--one" />
        <i className="ai-atmosphere__star ai-atmosphere__star--two" />
        <i className="ai-atmosphere__star ai-atmosphere__star--three" />
        <b className="ai-atmosphere__trace ai-atmosphere__trace--one" />
        <b className="ai-atmosphere__trace ai-atmosphere__trace--two" />
      </div>
      {children}
    </>
  );
}
