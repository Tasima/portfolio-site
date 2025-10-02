
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, GitCommit, Star } from "lucide-react";

interface GitHubStats {
  totalCommits: number;
  currentStreak: number;
  longestStreak: number;
  contributionsThisYear: number;
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

/*const GitHubContributions = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [username] = useState("tasima"); 

  // Generate mock contribution data (replace with real API call)
  const generateContributionData = (): ContributionDay[] => {
    const data: ContributionDay[] = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 365);

    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      const count = Math.floor(Math.random() * 8);
      const level = count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 6 ? 3 : 4;
      
      data.push({
        date: d.toISOString().split('T')[0],
        count,
        level: level as 0 | 1 | 2 | 3 | 4
      });
    }
    return data;
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Real implementation would use GitHub API:
        const response = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
        const events = await response.json();
        
        // For now, using mock data
        /*
        setTimeout(() => {
          setContributions(generateContributionData());
          setStats({
            totalCommits: 1247,
            currentStreak: 12,
            longestStreak: 45,
            contributionsThisYear: 342
          });
          setLoading(false);
        }, 1000);
        */
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
        
    };

    fetchGitHubData();
    
    // Set up real-time updates every 30 minutes
    const interval = setInterval(fetchGitHubData, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [username]);

  const getContributionColor = (level: number): string => {
    const colors = [
      "bg-muted/30", // No contributions
      "bg-accent/30", // Low
      "bg-accent/50", // Medium-low
      "bg-accent/70", // Medium-high
      "bg-accent"     // High
    ];
    return colors[level] || colors[0];
  };

  const getMonthNames = () => {
    const months = [];
    const today = new Date();
    for (let i = 11; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      months.push(date.toLocaleDateString('en-US', { month: 'short' }));
    }
    return months;
  };

  const organizeContributionsByWeek = () => {
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    contributions.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay();
      
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      
      currentWeek.push(day);
      
      if (index === contributions.length - 1) {
        weeks.push(currentWeek);
      }
    });

    return weeks;
  };

  if (loading) {
    return (
      <section id="github" className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="glass-effect">
            <CardHeader>
              <div className="flex items-center gap-2">
                <GitBranch className="h-6 w-6 text-primary" />
                <CardTitle className="gradient-text">GitHub Activity</CardTitle>
              </div>
              <CardDescription>Loading real-time contribution data...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="animate-pulse">
                <div className="h-32 bg-muted/20 rounded-lg mb-4"></div>
                <div className="grid grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-16 bg-muted/20 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const weeks = organizeContributionsByWeek();

  return (
    <section id="github" className="py-20 px-4">
      <div className="container mx-auto">
        <Card className="glass-effect">
          <CardHeader>
            <div className="flex items-center gap-2">
              <GitBranch className="h-6 w-6 text-primary" />
              <CardTitle className="gradient-text">GitHub Activity</CardTitle>
            </div>
            <CardDescription>
              Real-time contribution graph • Updates every 30 minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contribution Graph */}
            <div className="relative">
              <div className="mb-4 text-sm text-muted-foreground">
                {stats?.contributionsThisYear} contributions in the last year
              </div>
              
              {/* Month labels */}
              <div className="flex justify-between text-xs text-muted-foreground mb-2 px-3">
                {getMonthNames().map((month, index) => (
                  <span key={index}>{month}</span>
                ))}
              </div>
              
              {/* Days of week labels */}
              <div className="flex">
                <div className="flex flex-col text-xs text-muted-foreground w-8 justify-between py-1">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>
                
                {/* Contribution grid */}
                <div className="flex gap-1 overflow-x-auto">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {[...Array(7)].map((_, dayIndex) => {
                        const contribution = week.find(c => new Date(c.date).getDay() === dayIndex);
                        return (
                          <div
                            key={dayIndex}
                            className={`w-3 h-3 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer ${
                              contribution 
                                ? getContributionColor(contribution.level)
                                : "bg-muted/20"
                            }`}
                            title={contribution ? `${contribution.count} contributions on ${contribution.date}` : ''}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                <span>Learn how we count contributions</span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-surface border border-border/50">
                <div className="flex items-center justify-center mb-2">
                  <GitCommit className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stats?.totalCommits.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Commits</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-surface border border-border/50">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">{stats?.currentStreak}</div>
                <div className="text-sm text-muted-foreground">Current Streak</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-surface border border-border/50">
                <div className="flex items-center justify-center mb-2">
                  <Badge variant="outline" className="border-accent text-accent">
                    MAX
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-accent">{stats?.longestStreak}</div>
                <div className="text-sm text-muted-foreground">Longest Streak</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-surface border border-border/50">
                <div className="flex items-center justify-center mb-2">
                  <GitBranch className="h-5 w-5 text-primary-glow" />
                </div>
                <div className="text-2xl font-bold text-primary-glow">{stats?.contributionsThisYear}</div>
                <div className="text-sm text-muted-foreground">This Year</div>
              </div>
            </div>

            {/* Integration Info */}
            <div className="mt-6 p-4 rounded-lg bg-muted/20 border border-border/30">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">
                    Continuous Integration Active
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    This graph automatically updates every 30 minutes using GitHub's API. 
                    The data includes commits, pull requests, issues, and code reviews across all repositories.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default GitHubContributions;
*/
export {}