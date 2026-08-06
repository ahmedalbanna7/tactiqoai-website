export const siteConfig = {
  name: "TactiqoAI",
  domain: "https://TactiqoAI.com",
  email: "ahmedalbanna@tactiqoai.com",
  linkedIn: "#",
  contactEndpoint: "",
  slogans: {
    primary: "Beyond Software. Into Intelligence.",
    hero: "Built to Think. Designed to Scale.",
    supporting: "Intelligence at the core, powering businesses that lead.",
    positioning: "Engineering Intelligent Systems.",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Company", href: "#company" },
    { label: "Solutions", href: "#solutions" },
    { label: "Products", href: "#products" },
    { label: "Intelligent Workflows", href: "#intelligent-workflows" },
    { label: "How We Build", href: "#process" },
    { label: "Applications", href: "#applications" },
    { label: "Contact", href: "#contact" },
  ],
  productRoutes: {
    football: "#contact",
    pmo: "#contact",
  },
} as const;
