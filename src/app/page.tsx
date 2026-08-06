import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExperienceShell } from "@/components/layout/ExperienceShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { CompanySection } from "@/components/sections/CompanySection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { AgenticAISection } from "@/components/sections/AgenticAISection";
import { IntelligentSystemSection } from "@/components/sections/IntelligentSystemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <ExperienceShell>
      <Navbar />
      <main>
        <HeroSection />
        <CompanySection />
        <SolutionsSection />
        <ProductsSection />
        <AgenticAISection />
        <IntelligentSystemSection />
        <ProcessSection />
        <ApproachSection />
        <ApplicationsSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </ExperienceShell>
  );
}
