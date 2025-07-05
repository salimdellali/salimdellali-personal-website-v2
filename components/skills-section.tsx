"use client"

import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"

interface Skill {
  category: string
  items: string[]
}

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section id="skills" className="py-24 skills-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isInView ? "animate-in slide-in-from-bottom-4" : "opacity-0"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-high-contrast mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 skills-bg mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div
                key={skillCategory.category}
                className={`bg-card p-8 rounded-xl border border-border ${
                  isInView ? `animate-in slide-in-from-bottom-4 delay-${index * 200}` : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-high-contrast mb-6 text-center">{skillCategory.category}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`bg-purple-500/10 border-purple-500/20 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-200 ${
                        isInView ? `animate-in fade-in-0 delay-${index * 200 + skillIndex * 100}` : ""
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
