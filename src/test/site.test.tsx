import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "@/components/layout/Navbar";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { AgenticAISection } from "@/components/sections/AgenticAISection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

describe("TactiqoAI website", () => {
  it("renders navigation and opens the accessible mobile menu", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Build with TactiqoAI" })).toHaveAttribute("href", "#contact");
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();
  });

  it("renders every requested solution and agent concept", () => {
    const { unmount } = render(<SolutionsSection />);
    expect(screen.getByText("Complete Intelligent Systems")).toBeInTheDocument();
    expect(screen.getByText("RAG & Knowledge")).toBeInTheDocument();
    expect(screen.getByText("Computer Vision")).toBeInTheDocument();
    unmount();
    render(<AgenticAISection />);
    expect(screen.getByText("Agent Harness")).toBeInTheDocument();
    expect(screen.getByText("Human Approval")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Knowledge/ })).toBeInTheDocument();
  });

  it("renders both products and filters the applications", async () => {
    const user = userEvent.setup();
    const { unmount } = render(<ProductsSection />);
    expect(screen.getByText("Football Intelligence Platform")).toBeInTheDocument();
    expect(screen.getByText("Project & Operations Intelligence")).toBeInTheDocument();
    unmount();
    render(<ApplicationsSection />);
    await user.type(screen.getByPlaceholderText("Find an application…"), "contract");
    expect(screen.getByText("Contract Analysis")).toBeInTheDocument();
    expect(screen.queryByText("Student Support")).not.toBeInTheDocument();
  });

  it("validates the static contact form without faking a submission", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    await user.click(screen.getByRole("button", { name: /Start Your AI Project/ }));
    expect(screen.getByText("Please enter your full name.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a valid work email.")).toBeInTheDocument();
    expect(screen.getByText("Please select a project type.")).toBeInTheDocument();
  });
});

