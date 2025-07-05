"use client"

import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"

interface Experience {
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section id="experience" className="py-24 experience-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isInView ? "animate-in slide-in-from-bottom-4" : "opacity-0"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-high-contrast mb-4">Professional Experience</h2>
            <div className="w-24 h-1 experience-bg mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative bg-card p-8 rounded-xl shadow-sm border border-border md:ml-20 ${
                    isInView ? `animate-in slide-in-from-left-4 delay-${index * 200}` : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-8 w-4 h-4 experience-bg rounded-full border-4 border-background shadow-sm hidden md:block"></div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-high-contrast">{exp.position}</h3>
                      <p className="text-lg experience-accent font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20 w-fit">
                      {exp.duration}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
