"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";

type FormFields = "name" | "email" | "company" | "projectType" | "message";
type FormErrors = Partial<Record<FormFields, string>>;

const projectTypes = ["AI System", "Agentic AI", "AI Agents", "RAG and Knowledge Platform", "Workflow Automation", "Computer Vision", "Analytics and Decision Intelligence", "PMO AI", "AI Assistant", "Custom Software", "Other"];

export function ContactSection() {
  const [errors, setErrors] = useState<FormErrors>({});

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries()) as Record<FormFields, string>;
    const next: FormErrors = {};
    if (!values.name?.trim()) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email ?? "")) next.email = "Please enter a valid work email.";
    if (!values.company?.trim()) next.company = "Please enter your company name.";
    if (!values.projectType) next.projectType = "Please select a project type.";
    if ((values.message?.trim().length ?? 0) < 20) next.message = "Please add at least 20 characters about your project.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      const subject = encodeURIComponent(`TactiqoAI project enquiry - ${values.projectType}`);
      const body = encodeURIComponent(`Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\n\n${values.message}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact__glow" aria-hidden="true"><span /><i /><b /></div>
      <div className="container contact__layout">
        <div className="contact__content reveal">
          <p className="eyebrow"><span />Start a Conversation</p>
          <h2>Your Business Already Has the Knowledge. <em>We Build the Intelligence.</em></h2>
          <p>Let&apos;s build an intelligent system that understands your information, supports your people, coordinates work, automates processes, and grows with your organization.</p>
          <a href={`mailto:${siteConfig.email}`}><Mail size={18} />Talk to TactiqoAI<ArrowUpRight size={17} /></a>
        </div>
        <form className="contact-form reveal" onSubmit={submit} noValidate>
          <div className="contact-form__row">
            <label>Full name<input name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name && <span role="alert">{errors.name}</span>}</label>
            <label>Work email<input name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} />{errors.email && <span role="alert">{errors.email}</span>}</label>
          </div>
          <label>Company name<input name="company" autoComplete="organization" aria-invalid={Boolean(errors.company)} />{errors.company && <span role="alert">{errors.company}</span>}</label>
          <label>Project type<select name="projectType" defaultValue="" aria-invalid={Boolean(errors.projectType)}><option value="" disabled>Select a project type</option>{projectTypes.map((item) => <option key={item}>{item}</option>)}</select>{errors.projectType && <span role="alert">{errors.projectType}</span>}</label>
          <label>Tell us about your project<textarea name="message" rows={5} aria-invalid={Boolean(errors.message)} />{errors.message && <span role="alert">{errors.message}</span>}</label>
          <button type="submit">Start Your AI Project <ArrowUpRight size={17} /></button>
          <small>This static form opens your email application. A direct contact service can be connected later.</small>
        </form>
      </div>
    </section>
  );
}
