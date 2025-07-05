import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import portfolioData from "@/data/portfolio.json"
import { GradientSeparator } from "@/components/diagonal-separator"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection data={portfolioData.personal} social={portfolioData.social} />
        <GradientSeparator variant="hero-to-about" />
        <AboutSection data={portfolioData.personal} />
        <GradientSeparator variant="about-to-projects" />
        <ProjectsSection projects={portfolioData.projects} />
        <GradientSeparator variant="projects-to-skills" />
        <SkillsSection skills={portfolioData.skills} />
        <GradientSeparator variant="skills-to-experience" />
        <ExperienceSection experience={portfolioData.experience} />
        <GradientSeparator variant="experience-to-contact" />
        <ContactSection data={portfolioData.personal} />
      </main>
    </div>
  )
}
