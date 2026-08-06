import {
  Activity,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  CodeXml,
  Eye,
  FileSearch,
  GitBranch,
  Layers3,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const solutions = [
  { title: "AI Systems", icon: BrainCircuit, description: "Complete AI-powered platforms, assistants, copilots, decision-support tools, and specialized intelligent applications." },
  { title: "Agentic AI", icon: Network, description: "Systems that plan, coordinate, use tools, retrieve knowledge, execute workflows, and request human approval." },
  { title: "AI Agents", icon: Bot, description: "Specialized agents for research, operations, project support, analysis, reporting, risk monitoring, and user assistance." },
  { title: "RAG & Knowledge", icon: FileSearch, description: "Permission-aware systems that connect documents, data, policies, reports, and applications to useful AI assistance." },
  { title: "Workflow Automation", icon: Workflow, description: "Controlled workflows for approvals, reports, operations, project activities, employee requests, and repetitive processes." },
  { title: "Computer Vision", icon: Eye, description: "Systems that understand images and video through detection, tracking, OCR, classification, inspection, and analysis." },
  { title: "Decision Intelligence", icon: ChartNoAxesCombined, description: "Operational insights, risk indicators, predictions, recommendations, dashboards, and AI-generated reports." },
  { title: "Custom Software", icon: CodeXml, description: "Web platforms, portals, dashboards, internal applications, and complete software products enhanced with AI." },
] as const;

export const agentCapabilities = [
  { title: "Orchestration", icon: Network, description: "One coordinator receives goals, routes tasks, selects agents, tracks progress, and manages exceptions." },
  { title: "Agent Harness", icon: ShieldCheck, description: "The control environment defining tools, memory, permissions, limits, monitoring, approval, and output validation." },
  { title: "Memory", icon: BrainCircuit, description: "Useful context across a session, workflow, project, knowledge base, or approved long-term interaction." },
  { title: "Planning", icon: GitBranch, description: "The system breaks a goal into controlled steps: plan, tasks, execution, review, and result." },
  { title: "Tool Use", icon: Layers3, description: "Agents can work with approved APIs, documents, search, data, dashboards, project tools, and internal applications." },
  { title: "Human Approval", icon: ShieldCheck, description: "Important actions can pause for review, confirmation, or approval before execution." },
] as const;

export const processSteps = [
  ["01", "Understand", "We understand the problem, users, goals, workflows, available information, risks, and expected results."],
  ["02", "Design", "We design the experience, AI behavior, workflows, and how every part should work together."],
  ["03", "Build", "We develop the software, agents, RAG, automation, analytics, integrations, and user interfaces."],
  ["04", "Test", "We test responses, workflows, performance, safety, usability, and real business scenarios."],
  ["05", "Launch", "We launch the solution in the environment that fits the organization."],
  ["06", "Improve", "We monitor results, collect feedback, and continue developing the system."],
] as const;

export const applications = [
  ["Intelligence Platforms", "Connected systems that turn information, processes, and data into clear assistance, insights, and actions."],
  ["Knowledge Platforms", "AI-powered access to documents, policies, reports, manuals, records, and organizational knowledge."],
  ["Risk Intelligence", "Identifying, monitoring, explaining, prioritizing, and reporting operational, project, financial, and process risks."],
  ["Project Document Intelligence", "Understanding drawings, reports, requirements, contracts, progress records, and supporting information."],
  ["Contract Analysis", "Extracting clauses, obligations, dates, risks, differences, requirements, and important actions."],
  ["Site Reporting", "Organizing and summarizing site updates, observations, progress, issues, and evidence."],
  ["Workflow Monitoring", "Tracking delays, approvals, dependencies, exceptions, risks, and required actions."],
  ["Estimation", "Supporting cost, time, resource, quantity, scope, and effort estimation using available information."],
  ["PMO Intelligence", "Supporting portfolio monitoring, project status, risks, reporting, coordination, and executive visibility."],
  ["AI Assistants", "Role-based assistants for employees, managers, customers, students, project teams, and decision-makers."],
  ["Academic Guidance", "Helping students understand programs, requirements, options, policies, applications, and academic pathways."],
  ["Student Support", "Accessible answers, guidance, case support, document assistance, and personalized information."],
  ["Operations Intelligence", "Monitoring operations, identifying problems, summarizing performance, and recommending actions."],
  ["Recruitment Workflows", "Supporting candidate screening, interviews, evaluations, offers, approvals, and reporting."],
  ["Policy Assistants", "Helping users understand policies, procedures, requirements, responsibilities, and approved actions."],
  ["Employee Operations", "Supporting requests, onboarding, internal knowledge, forms, workflows, approvals, and HR services."],
  ["Compliance Support", "Helping teams review requirements, track evidence, monitor actions, and prepare reports."],
  ["Approval Workflows", "Automating requests, reviews, decisions, escalations, notifications, and approval records."],
] as const;

export const trustItems = [
  ["Human Approval", "Important actions can require review or approval before execution.", ShieldCheck],
  ["Permissions", "Agents only access the tools, knowledge, and actions allowed for their role.", ScanSearch],
  ["Guardrails", "Rules and checks help control agent behavior and validate outputs.", ShieldCheck],
  ["Monitoring", "Track workflows, agent actions, failures, performance, and usage.", Activity],
  ["Traceability", "Important actions, decisions, retrieved knowledge, and approvals can be recorded.", GitBranch],
  ["Continuous Improvement", "Feedback and results improve prompts, knowledge, workflows, and system behavior.", Sparkles],
] as const;

