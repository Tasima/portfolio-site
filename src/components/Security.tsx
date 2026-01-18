import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  Bug, 
  Key, 
  FileSearch,
  Network,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Target,
  Zap,
  Smartphone
} from "lucide-react";

const Security = () => {
  const securityProjects = [
    {
      title: "Secure Messaging System",
      description: "Implemented end-to-end encryption using Libsodium for a decentralized P2P messaging app.",
      technologies: ["Libsodium", "Kotlin", "NearbyConnections API", "ZXing QR library"],
      securityFeatures: ["E2E Encryption", "Perfect Forward Secrecy", "Zero-knowledge Architecture", "Automatic Peer Discovery", "Delay-Tolerant Networking"],
      status: "Completed",
      icon: Lock
    },
    {
      title: "Mobile App Security Analysis",
      description: "Conducted static analysis using MobSF to identify vulnerabilities in Android applications.",
      technologies: ["MobSF", "Android", "Python", "OWASP"],
      securityFeatures: ["Static Analysis", "Debug Certificate Detection", "SQL Injection Prevention"],
      status: "Ongoing",
      icon: Smartphone
    },
    {
      title: "Vulnerability Scanner",
      description: "Built a web application scanner that checks for common OWASP Top 10 vulnerabilities.",
      technologies: ["Python", "BeautifulSoup", "Requests", "SQLAlchemy"],
      securityFeatures: ["XSS Detection", "SQL Injection Testing", "CSRF Protection"],
      status: "In Development",
      icon: Bug
    },
    {
      title: "Secure Authentication System",
      description: "Developed JWT-based authentication with bcrypt password hashing and multi-factor authentication.",
      technologies: ["JWT", "bcrypt", "Node.js", "Redis"],
      securityFeatures: ["Password Hashing", "Session Management", "2FA Integration"],
      status: "In Development",
      icon: Key
    }
  ];

  const learningPaths = [
    {
      category: "Certifications",
      items: [
        { name: "ESEFA ES Fundamentals for Business", status: "Completed" , date: "22/10/2025"},
        { name: "SAP Certified Associate - Implementation Consultant", status: "In Progress", date: "February 2026"}
      ]
    },
    {
      category: "Courses & Training",
      items: [
        { name: "Computer Networking" , status: "Awaiting UCT exam results", date: "Jan 2026"},
        { name: "Operating Systems" , status: "Awaiting UCT exam results", date: "Jan 2026"},
        { name: "Project Management" , status: "Awaiting UCT exam results", date: "Jan 2026"},
        { name: "Advanced Software Design" , status: "Awaiting UCT exam results", date: "Jan 2026"},
        { name: "E-commerce" , status: "Awaiting UCT exam results", date: "Jan 2026"},
        { name: "Theory of Algorithms and Computation" , status: "Awaiting UCT exam results", date: "Jan 2026"},
        { name: "JavaScript Zero to Expert Udemy Course", status: "Learning", date: "2026"},
        { name: "Implementing SAP S/4HANA Cloud Private Edition" , status: "Learning", date: "2026"},


      ]
    },
    {
      category: "Practical Experience",
      items: [
        { name: "CTF Competitions", status: "Active", date: "Monthly" },
        { name: "HackTheBox Labs", status: "Active", date: "Weekly" },
        { name: "TryHackMe Rooms" , status:"Active", date:"Weekly"},
        { name: "Bug Bounty Programs", status: "Learning", date: "2024" }
      ]
    }
  ];

  const securitySkills = [
    { name: "Web Application Security", level: 55, icon: Shield },
    { name: "Cryptography", level: 60, icon: Lock },
    { name: "Penetration Testing", level: 60, icon: Target },
    { name: "Secure Code Review", level: 80, icon: Eye },
    { name: "Network Security", level: 85, icon: Network },
    { name: "Incident Response", level: 55, icon: Zap }
  ];

  const resources = [
    { title: "The Web Application Hacker's Handbook", type: "Book", url: "https://edu.anarcho-copy.org/Against%20Security%20-%20Self%20Security/Dafydd%20Stuttard,%20Marcus%20Pinto%20-%20The%20web%20application%20hacker's%20handbook_%20finding%20and%20exploiting%20security%20flaws-Wiley%20(2011).pdf" },
    { title: "OWASP Testing Guide", type: "Documentation", url: "https://owasp.org/www-project-web-security-testing-guide/v42/" },
    { title: "Burp Suite", type: "Tool", url: "https://portswigger.net/burp/documentation/contents" },
    { title: "Kali Linux", type: "Platform", url: "https://www.kali.org/docs/" },
    { title: "CyberChef", type: "Tool", url: "https://gchq.github.io/CyberChef/" },
    { title: "Wireshark", type: "Tool", url: "https://www.wireshark.org/docs/" },
    { title: "Nmap", type: "Tool", url: "https://nmap.org/docs.html" },

  ];

  return (
    <section id="security" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cybersecurity <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            In a world of increasing digital threats, I'm passionate about building resilient systems 
            and securing applications from the ground up. Here's my journey into cybersecurity.
          </p>
        </div>

        {/* Security Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <FileSearch className="w-6 h-6 mr-3 text-primary" />
            Security Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {securityProjects.map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-background/50 group-hover:glow-effect transition-all duration-300">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge 
                          variant="secondary"
                          className={`mt-1 ${
                            project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                            project.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Security Features:</h4>
                    <div className="space-y-1">
                      {project.securityFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-primary" />
            Security Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {securitySkills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-primary font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning & Development */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Eye className="w-6 h-6 mr-3 text-primary" />
            Continuous Learning
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{path.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {path.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-2 border-primary/30 pl-4 py-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{item.name}</span>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              item.status === 'Completed' ? 'border-green-400 text-green-400' :
                              item.status === 'In Progress' || item.status === 'Active' ? 'border-blue-400 text-blue-400' :
                              'border-yellow-400 text-yellow-400'
                            }`}
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources & Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
            Security Arsenal
          </h3>
          
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resources.map((resource, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors duration-300"
                  >
                    <div>
                      <span className="font-medium">{resource.title}</span>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metrics & Proof */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Target className="w-6 h-6 mr-3 text-primary" />
            Metrics & Proof
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Platform Badges */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Badge className="w-5 h-5 mr-3 text-primary" />
                  Platform Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <span className="font-medium text-sm">TryHackMe</span>
                        <p className="text-xs text-muted-foreground">Bronze League</p>
                        <p className="text-xs text-muted-foreground">Globally Ranked</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs border-green-400 text-green-400">
                      Rank 271258
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Key className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="font-medium text-sm">HackTheBox</span>
                        <p className="text-xs text-muted-foreground">Script Kiddie</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs border-blue-400 text-blue-400">
                      Active
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <span className="font-medium text-sm">HackerRank</span>
                        <p className="text-xs text-muted-foreground">Software Engineer Role</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs border-orange-400 text-orange-400">
                      Active
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Security Scorecard */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-primary" />
                  Portfolio Security Scan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-400 mb-1">A</div>
                  <p className="text-sm text-muted-foreground">Overall UpGuard Grade (837/950)</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Website Security (Passed 6/9)</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Network</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">DNS (Passed 2/3)</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Encryption (Passed 16/17)</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Leakage Test</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">IP/Domain Repuatation</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Vulnerability Management</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4 text-xs">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  <a href="https://www.upguard.com/instant-security-score/report?c=https%3A%2F%2Ftasima-hapazari.vercel.app%2F" target="_blank">View Full Report</a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Security Progress Tracker */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Eye className="w-5 h-5 mr-3 text-primary" />
                  Security Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold gradient-text mb-1">67%</div>
                  <p className="text-sm text-muted-foreground">Goals Completed</p>
                </div>
                
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden mb-4">
                  <div 
                    className="h-3 bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '67%' }}
                  ></div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Certifications</span>
                    <span className="text-primary font-mono">0/4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Security Projects</span>
                    <span className="text-primary font-mono">4/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>CTF Challenges</span>
                    <span className="text-primary font-mono">24/30</span>
                  </div>
                    <div className="flex items-center justify-between">
                    <span>Personal Projects</span>
                    <span className="text-primary font-mono">4/10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Vulnerability Reports</span>
                    <span className="text-primary font-mono">3</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Next milestone: <span className="text-primary">Security+ Cert</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Future Goals */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
            <Target className="w-6 h-6 mr-3 text-primary" />
            Future Aspirations
          </h3>
          
          <Card className="bg-gradient-card border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Short-term Goals (2026)</h4>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                      Complete Security+ certification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                      Contribute to open-source security tools
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                      Participate in CTF competitions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                      Build a comprehensive vulnerability scanner
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Long-term Vision</h4>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <Target className="w-4 h-4 mr-3 text-primary" />
                      Pursue penetration testing roles
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 mr-3 text-primary" />
                      Research secure software architectures
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 mr-3 text-primary" />
                      Develop security-focused applications
                    </li>
                    <li className="flex items-center">
                      <Target className="w-4 h-4 mr-3 text-primary" />
                      Participate in Bug Bounty Programs
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground italic">
                 "The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards, and even then I have my doubts."
- Gene Spafford
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Security;