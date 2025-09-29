import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Zap, Globe, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-compost.jpg";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Smart Automation",
      description: "IoT sensors automatically monitor temperature, moisture, and pH levels for optimal composting."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track your composting progress with detailed statistics and predictions."
    },
    {
      icon: Globe,
      title: "Eco-Friendly",
      description: "Reduce waste by up to 90% while creating nutrient-rich soil for your garden."
    },
    {
      icon: Leaf,
      title: "Sustainable Future",
      description: "Join thousands of households making a positive environmental impact."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-glow">
            <span className="block mb-2">Turn Waste into</span>
            <span className="hero-text">Wealth 🌱</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Smart composting that saves time, money, and the planet. 
            Advanced IoT monitoring for eco-friendly waste management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/statistics">
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                Check Composting Stats
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="glass" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">
              Why Choose TerraSmart?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary composting technology that makes sustainable living effortless
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group neon-border p-6 rounded-xl hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary p-3 rounded-xl w-fit mb-4 group-hover:shadow-neon transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="neon-border p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Ready to Start Composting Smart?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the eco-revolution and transform your waste into wealth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                  View Products
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="neon" size="lg" className="text-lg px-8 py-3">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;