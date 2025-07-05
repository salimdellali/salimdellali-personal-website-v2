interface GradientSeparatorProps {
  variant:
    | "hero-to-about"
    | "about-to-projects"
    | "projects-to-skills"
    | "skills-to-experience"
    | "experience-to-contact"
}

export function GradientSeparator({ variant }: GradientSeparatorProps) {
  return <div className={`gradient-separator ${variant}`} />
}
