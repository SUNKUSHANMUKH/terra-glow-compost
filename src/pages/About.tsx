import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Wifi, Leaf, Zap, BarChart3, Shield, Smartphone, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Cpu,
      title: "IoT Monitoring",
      description: "Advanced sensors continuously monitor temperature, moisture, pH, and oxygen levels for optimal composting conditions."
    },
    {
      icon: Wifi,
      title: "Smart Connectivity",
      description: "Real-time data transmission to your smartphone app with instant notifications and alerts."
    },
    {
      icon: BarChart3,
      title: "AI Analytics",
      description: "Machine learning algorithms predict composting times and optimize the process for maximum efficiency."
    },
    {
      icon: Zap,
      title: "Automated Control",
      description: "Automatic aeration, temperature regulation, and moisture control without manual intervention."
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Comprehensive mobile application for monitoring, control, and getting composting tips and insights."
    },
    {
      icon: Shield,
      title: "Eco-Safe Design",
      description: "Made from 100% recyclable materials with energy-efficient operation and minimal environmental impact."
    }
  ];

  const stats = [
    { value: "90%", label: "Waste Reduction" },
    { value: "60%", label: "Faster Composting" },
    { value: "85%", label: "User Satisfaction" },
    { value: "2,500+", label: "Happy Customers" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            About TerraSmart Compost
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing waste management with cutting-edge IoT technology, 
            making composting accessible, efficient, and rewarding for everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <Card className="neon-border bg-gradient-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold flex items-center justify-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-neon-green" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To create a sustainable future by transforming how households manage organic waste. 
                Our smart composting systems combine advanced technology with environmental consciousness, 
                making it easier than ever to reduce waste, save money, and contribute to a healthier planet.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
            How TerraSmart Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-gradient-primary p-6 rounded-full w-fit mx-auto shadow-neon">
                <span className="text-3xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold">Add Organic Waste</h3>
              <p className="text-muted-foreground">
                Simply add your kitchen scraps, yard waste, and other organic materials to the smart composter.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-gradient-primary p-6 rounded-full w-fit mx-auto shadow-neon">
                <span className="text-3xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold">AI Optimization</h3>
              <p className="text-muted-foreground">
                Our AI monitors and adjusts conditions automatically for optimal decomposition and nutrient retention.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-gradient-primary p-6 rounded-full w-fit mx-auto shadow-neon">
                <span className="text-3xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold">Harvest Rich Soil</h3>
              <p className="text-muted-foreground">
                Collect nutrient-rich compost for your garden and enjoy the satisfaction of zero waste living.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="neon-border bg-gradient-card group hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-gradient-primary p-2 rounded-lg group-hover:shadow-neon transition-all duration-300">
                      <feature.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <Card className="neon-border bg-gradient-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-4">
                Impact by Numbers
              </CardTitle>
              <CardDescription className="text-lg">
                The difference we're making together
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="text-4xl font-bold hero-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
            Advanced Technology Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon-green">Hardware Innovation</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-neon-green/20 p-1 rounded">
                    <Leaf className="h-4 w-4 text-neon-green" />
                  </div>
                  <div>
                    <span className="font-semibold">Multi-Sensor Array:</span> Temperature, humidity, pH, oxygen, and pressure sensors
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-neon-green/20 p-1 rounded">
                    <Leaf className="h-4 w-4 text-neon-green" />
                  </div>
                  <div>
                    <span className="font-semibold">Automated Aeration:</span> Smart airflow management for optimal oxygenation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-neon-green/20 p-1 rounded">
                    <Leaf className="h-4 w-4 text-neon-green" />
                  </div>
                  <div>
                    <span className="font-semibold">Solar Integration:</span> Energy-efficient operation with solar backup
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon-cyan">Software Intelligence</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-neon-cyan/20 p-1 rounded">
                    <Zap className="h-4 w-4 text-neon-cyan" />
                  </div>
                  <div>
                    <span className="font-semibold">Machine Learning:</span> Predictive algorithms for composting optimization
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-neon-cyan/20 p-1 rounded">
                    <Zap className="h-4 w-4 text-neon-cyan" />
                  </div>
                  <div>
                    <span className="font-semibold">Real-time Analytics:</span> Continuous monitoring and instant insights
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-neon-cyan/20 p-1 rounded">
                    <Zap className="h-4 w-4 text-neon-cyan" />
                  </div>
                  <div>
                    <span className="font-semibold">Cloud Integration:</span> Secure data storage and remote access
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;