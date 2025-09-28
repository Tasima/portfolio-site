import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Code, 
  Database, 
  Smartphone,
  Globe,
  Filter
} from "lucide-react";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      category: "Full Stack",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team collaboration features.",
      image: "/api/placeholder/400/250", 
      technologies: ["Vue.js", "Firebase", "Vuetify", "Cloud Functions"],
      category: "Frontend",
      github: "https://github.com/yourusername/taskmanager",
      live: "https://your-taskmanager.com",
      featured: true
    },
    {
      title: "Weather Analytics API",
      description: "RESTful API for weather data analytics with machine learning predictions and historical data visualization.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "FastAPI", "PostgreSQL", "ML", "Docker"],
      category: "Backend",
      github: "https://github.com/yourusername/weather-api",
      live: "https://api.your-weather.com/docs",
      featured: false
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with workout plans, progress visualization, and social features.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Expo", "Supabase", "Charts"],
      category: "Mobile",
      github: "https://github.com/yourusername/fitness-tracker",
      live: "https://play.google.com/store/apps/details?id=com.yourapp",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with cutting-edge technologies and smooth animations.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      category: "Frontend",
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
      featured: false
    },
    {
      title: "Blog CMS Platform",
      description: "Content management system for bloggers with markdown support, SEO optimization, and analytics dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "MongoDB", "Prisma", "TailwindCSS"],
      category: "Full Stack",
      github: "https://github.com/yourusername/blog-cms",
      live: "https://your-blog-cms.com",
      featured: false
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];
  
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack": return Globe;
      case "Frontend": return Code;
      case "Backend": return Database;
      case "Mobile": return Smartphone;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in various technologies 
            and problem-solving approaches.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            return (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                onClick={() => setSelectedFilter(category)}
                className={`${
                  selectedFilter === category 
                    ? "bg-primary text-primary-foreground glow-effect" 
                    : "border-border hover:border-primary"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className={`group bg-gradient-card border-border hover:shadow-elegant transition-all duration-500 overflow-hidden ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-surface-variant text-foreground border border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 flex space-x-3">
                  <Button asChild className="flex-1">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;