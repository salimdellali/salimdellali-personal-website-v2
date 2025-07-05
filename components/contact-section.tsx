"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

interface ContactSectionProps {
  data: {
    email: string
    location: string
  }
}

export function ContactSection({ data }: ContactSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section id="contact" className="py-24 contact-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isInView ? "animate-in slide-in-from-bottom-4" : "opacity-0"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-high-contrast mb-4">Get In Touch</h2>
            <div className="w-24 h-1 contact-bg mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className={`space-y-8 ${isInView ? "animate-in slide-in-from-left-4 delay-200" : ""}`}>
              <div>
                <h3 className="text-2xl font-semibold text-high-contrast mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, and ways to create
                  meaningful digital experiences. Whether you have a specific project in mind or just want to explore
                  possibilities, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center border border-pink-500/20">
                    <Mail className="h-6 w-6 contact-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-high-contrast">Email</p>
                    <a
                      href={`mailto:${data.email}`}
                      className="text-muted-foreground hover:text-pink-400 transition-colors"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center border border-pink-500/20">
                    <MapPin className="h-6 w-6 contact-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-high-contrast">Location</p>
                    <p className="text-muted-foreground">{data.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-card p-8 rounded-xl border border-border ${isInView ? "animate-in slide-in-from-right-4 delay-400" : ""}`}
            >
              <h3 className="text-xl font-semibold text-high-contrast mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input placeholder="John" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input placeholder="Doe" className="bg-background border-border" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <Input placeholder="Project Discussion" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="resize-none bg-background border-border"
                  />
                </div>
                <Button className="w-full contact-bg hover:opacity-90">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
