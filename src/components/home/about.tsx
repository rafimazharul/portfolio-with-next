import { GraduationCap, Award, Languages, Code } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const STATS = [
  { value: "1+", label: "Year Experience" },
  { value: "3+", label: "Featured Projects" },
  { value: "100%", label: "Dedication" },
];

const EDUCATION = [
  {
    institution: "Dinajpur Polytechnic Institute",
    degree: "Diploma in Engineering",
    duration: "2021 – 2024",
    icon: <GraduationCap className="w-6 h-6 text-primary" />
  }
];

const TRAINING = [
  {
    platform: "Programming Hero",
    status: "Level 1 Completed, Level 2 Continuing",
    icon: <Award className="w-6 h-6 text-primary" />
  }
];

const LANGUAGES = [
  { name: "Bangla", level: "Native", icon: <Languages className="w-5 h-5 text-primary" /> },
  { name: "English", level: "Comfortable", icon: <Languages className="w-5 h-5 text-primary" /> }
];

export function About() {
  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-[10%] left-[5%] w-100 h-100 bg-primary/15 dark:bg-primary/35 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader 
          badge="Get to Know Me"
          title="About"
          titleAccent="Me"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: Bio & Stats */}
          <div>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed max-w-xl">
              <p>
                I&apos;m <span className="text-foreground font-semibold">Mazharul Islam Rafi</span>, a frontend web developer focused on creating intuitive interfaces and polished digital experiences.
              </p>
              <p>
                I have hands-on experience with <span className="text-primary font-medium">JavaScript, React.js, and modern frontend workflows</span>. I enjoy solving problems efficiently and turning designs into responsive, user-friendly websites.
              </p>
              <p>
                I&apos;m also expanding my backend knowledge with <span className="text-foreground font-semibold">Node.js, Express.js, and MongoDB</span> as I continue building toward a stronger MERN stack foundation.
              </p>
            </div>

            {/* Stats Row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="group p-4 border border-border bg-muted/20 rounded-xl hover:border-primary/40 hover:bg-muted/30 transition-all text-center"
                >
                  <p className="text-3xl font-black text-primary leading-none mb-1">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-foreground font-bold text-xl mb-5 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Languages I Speak
              </h4>
              <div className="flex flex-wrap gap-4">
                {LANGUAGES.map((lang) => (
                  <div 
                    key={lang.name}
                    className="premium-hover flex items-center gap-3 px-6 py-3 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30"
                  >
                    {lang.icon}
                    <div>
                      <p className="font-bold text-foreground leading-none">{lang.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education & Training */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <h4 className="text-foreground font-bold text-2xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                Education
              </h4>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div 
                    key={edu.institution}
                    className="premium-shadow group relative p-6 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30 hover:bg-muted/30"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h5>
                      <span className="text-sm font-medium text-primary border border-primary/20 rounded-md px-3 py-1 shrink-0 ml-3">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Training */}
            <div>
              <h4 className="text-foreground font-bold text-2xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                Additional Training
              </h4>
              <div className="space-y-4">
                {TRAINING.map((train) => (
                  <div 
                    key={train.platform}
                    className="premium-shadow group relative p-6 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30 hover:bg-muted/30"
                  >
                    <h5 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {train.platform}
                    </h5>
                    <p className="text-muted-foreground font-medium flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse shrink-0" />
                      {train.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
