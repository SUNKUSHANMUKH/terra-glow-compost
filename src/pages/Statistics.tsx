import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Droplets, Thermometer, Timer, TrendingUp, Recycle } from "lucide-react";

const Statistics = () => {
  const [progress, setProgress] = useState(65);
  const [daysLeft, setDaysLeft] = useState(15);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (Math.random() - 0.5) * 2;
        return Math.max(0, Math.min(100, newProgress));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: "Temperature",
      value: "65°C",
      description: "Optimal range: 55-70°C",
      icon: Thermometer,
      color: "text-neon-cyan",
      progress: 75
    },
    {
      title: "Moisture Level",
      value: "58%",
      description: "Optimal range: 50-65%",
      icon: Droplets,
      color: "text-neon-green",
      progress: 85
    },
    {
      title: "pH Level",
      value: "6.8",
      description: "Optimal range: 6.0-8.0",
      icon: TrendingUp,
      color: "text-neon-purple",
      progress: 90
    },
    {
      title: "Waste Reduced",
      value: "87%",
      description: "Total organic waste processed",
      icon: Recycle,
      color: "text-success",
      progress: 87
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
            Composting Statistics
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-time monitoring of your smart composting system
          </p>
        </div>

        {/* Main Progress Card */}
        <div className="mb-12">
          <Card className="neon-border bg-gradient-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3">
                <Timer className="h-8 w-8 text-neon-green" />
                Composting Progress
              </CardTitle>
              <CardDescription className="text-lg">
                Your organic waste is transforming into nutrient-rich soil
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2 hero-text">
                  {daysLeft} Days
                </div>
                <p className="text-xl text-muted-foreground">
                  Until compost becomes manure
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{progress.toFixed(1)}%</span>
                </div>
                <Progress 
                  value={progress} 
                  className="h-4 bg-secondary border border-primary/20"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-neon-green">24</div>
                  <div className="text-sm text-muted-foreground">Days Active</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon-cyan">15kg</div>
                  <div className="text-sm text-muted-foreground">Waste Processed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon-purple">3.2kg</div>
                  <div className="text-sm text-muted-foreground">Compost Ready</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="neon-border bg-gradient-card group hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {stat.description}
                </p>
                <Progress 
                  value={stat.progress} 
                  className="h-2 bg-secondary/50"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Eco Impact */}
        <Card className="neon-border bg-gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-3">
              <Leaf className="h-6 w-6 text-neon-green" />
              Environmental Impact
            </CardTitle>
            <CardDescription>
              Your contribution to a sustainable future
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-neon-green">247kg</div>
                <div className="text-sm text-muted-foreground">CO² Emissions Prevented</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-neon-cyan">156L</div>
                <div className="text-sm text-muted-foreground">Water Saved</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-neon-purple">89%</div>
                <div className="text-sm text-muted-foreground">Waste Diverted from Landfills</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;