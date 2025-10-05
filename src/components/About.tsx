import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking to break down complex problems into elegant solutions.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using modern development workflows.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a final year Computer Science student with a passion for creating 
            innovative digital experiences through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              As a final year Computer Science student, I've spent the past few years building a solid 
              foundation in software development, algorithms, and system design. My journey 
              has been driven by curiosity and a desire to solve real-world problems 
              with technology.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm an aspiring cybersecurity-focused software developer based in Cape Town. 
              I'm majoring in CS and Business Computing and I want to ultimately dive into the field
              of digital forensics and security. I'm pursuing an entry level SAP certification currently and want to be the 
              most well rounded developer I can. Full stack, mobile development and business process analysis are all 
              things I can bring to the table. 
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-primary">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">7+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gradient-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:glow-effect transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;