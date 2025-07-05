"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  data: {
    name: string
    title: string
    subtitle: string
    avatar: string
    resume: string
  }
  social: Array<{
    name: string
    url: string
    icon: string
  }>
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

export function HeroSection({ data, social }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 hero-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-in fade-in-0 duration-1000">
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 animate-in zoom-in-50 duration-700 delay-200">
              <Image
                src={data.avatar || "/placeholder.svg"}
                alt={data.name}
                width={128}
                height={128}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-pulse"></div>
          </div>

          <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-4">
              Available for new opportunities
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-high-contrast">
              Hi, I'm{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {data.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">{data.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{data.subtitle}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button size="lg" className="group bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group bg-transparent border-border hover:bg-muted">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-in slide-in-from-bottom-4 duration-700 delay-700">
            {social.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{item.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
