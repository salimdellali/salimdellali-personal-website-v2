"use client"

import { useInView } from "@/hooks/use-in-view"

interface AboutSectionProps {
  data: {
    bio: string
    location: string
  }
}

export function AboutSection({ data }: AboutSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section id="about" className="py-24 about-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isInView ? "animate-in slide-in-from-bottom-4" : "opacity-0"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-high-contrast mb-4">About Me</h2>
            <div className="w-24 h-1 about-bg mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about my background, experience, and what drives my passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-high-contrast">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{data.bio}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Currently based in <span className="about-accent font-semibold">{data.location}</span>, I'm passionate
                about creating digital solutions that make a real impact. I believe in continuous learning and staying
                up-to-date with the latest technologies and best practices.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-semibold text-high-contrast mb-6">What I Bring</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 about-bg rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-high-contrast">Full-Stack Development</h4>
                    <p className="text-muted-foreground">
                      End-to-end web application development with modern technologies
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 about-bg rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-high-contrast">Problem Solving</h4>
                    <p className="text-muted-foreground">Analytical approach to complex technical challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 about-bg rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-high-contrast">Team Collaboration</h4>
                    <p className="text-muted-foreground">Strong communication and teamwork in agile environments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
