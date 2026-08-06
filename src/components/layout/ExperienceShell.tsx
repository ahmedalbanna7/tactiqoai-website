"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ExperienceShell({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), reduced ? 40 : 320);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>(".reveal")];
    if (reduced || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("reveal--visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6%", threshold: 0.04 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
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
