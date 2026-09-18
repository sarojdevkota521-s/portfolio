import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TerminalConsole from "@/components/TerminalConsole";
import TechStack from "@/components/TechStack";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationCard from "@/components/EducationCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] relative selection:bg-emerald-500 selection:text-white">
      {/* Background Cyber Grid lines */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.035] pointer-events-none" />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-16 sm:space-y-24 z-10">
        {/* Hero Section with Interactive 3D Object */}
        <Hero />

        {/* Interactive Developer Terminal Simulation */}
        <div className="pt-2">
          <TerminalConsole />
        </div>

        {/* Technical Stack & Superpowers */}
        <TechStack />

        {/* Engineering Deployments & Production Systems */}
        <ProjectShowcase />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Education & Foundations */}
        <EducationCard />

        {/* Direct Contact & Collaboration Hub */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
