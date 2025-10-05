import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Palette,
  Server,
  Brain
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "text-primary",
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", 
        "Tailwind CSS", "JavaScript ES6+", "Responsive Design"
      ]
    },
    {
      icon: Server,
      title: "Backend Development", 
      color: "text-secondary",
      skills: [
        "Node.js", "Python", "Java", "Express.js", "FastAPI", 
        "RESTful APIs", "GraphQL", "Microservices", "Ruby"
      ]
    },
    {
      icon: Database,
      title: "Database & Storage",
      color: "text-accent", 
      skills: [
        "PostgreSQL", "MongoDB", "MySQL", "Supabase",
        "Firebase", "Prisma ORM", "Database Design"
      ]
    },
    {
      icon: GitBranch,
      title: "DevOps & Tools",
      color: "text-primary-glow",
      skills: [
        "Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD",
        "GitHub Actions", "Testing (Jest, Cypress)"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "text-secondary",
      skills: [
        "React Native", "Flutter", "Progressive Web Apps",
        "Mobile-First Design", "Cross-Platform Development", "Kotlin"
      ]
    },
    {
      icon: Brain,
      title: "Other Technologies",
      color: "text-accent",
      skills: [
        "Machine Learning", "Data Structures", "Algorithms",
        "System Design", "Agile Methodology", "Problem Solving", "Business Process Management", "Systems Analysis", "Business Process Analysis"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through academic learning, personal projects, 
            and hands-on experience with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-background/50 group-hover:glow-effect transition-all duration-300`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-surface text-foreground border border-border hover:border-primary transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-12">
            Core <span className="gradient-text">Competencies</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Frontend Development", level: 60 },
              { skill: "Backend Development", level: 75 },
              { skill: "Database Design", level: 80 },
              { skill: "System Architecture", level: 75 },
              { skill: "DevOps & Deployment", level: 70 },
              { skill: "Mobile Development", level: 65 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-primary font-mono">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;