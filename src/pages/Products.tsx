import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Home, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const plans = [
    {
      name: "Basic",
      icon: Home,
      price: "$299",
      description: "Perfect for small households",
      features: [
        "5kg waste capacity",
        "Basic IoT monitoring",
        "Mobile app access",
        "3-month warranty",
        "Email support"
      ],
      popular: false,
      color: "neon-green"
    },
    {
      name: "Premium",
      icon: Star,
      price: "$599",
      description: "Ideal for families and enthusiasts",
      features: [
        "15kg waste capacity",
        "Advanced AI optimization",
        "Real-time notifications",
        "1-year warranty",
        "Priority support",
        "Solar panel integration",
        "Weather resistance"
      ],
      popular: true,
      color: "neon-cyan"
    },
    {
      name: "Family Pack",
      icon: Users,
      price: "$899",
      description: "Best for large families and communities",
      features: [
        "25kg waste capacity",
        "Multi-chamber design",
        "Advanced analytics dashboard",
        "2-year warranty",
        "24/7 support",
        "Solar + battery backup",
        "Smart scheduling",
        "Community features"
      ],
      popular: false,
      color: "neon-purple"
    }
  ];

  const productImages = [
    {
      title: "TerraSmart Basic",
      description: "Compact design for urban homes"
    },
    {
      title: "TerraSmart Premium", 
      description: "Advanced features for optimal composting"
    },
    {
      title: "TerraSmart Family",
      description: "Large capacity for big households"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Products & Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect TerraSmart composting system for your needs. 
            All plans include our revolutionary IoT technology and mobile app.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            Our Product Line
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productImages.map((product, index) => (
              <Card key={product.title} className="neon-border bg-gradient-card group hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="h-48 bg-gradient-primary/20 rounded-lg flex items-center justify-center group-hover:bg-gradient-primary/30 transition-all duration-300">
                    <Building className="h-16 w-16 text-primary opacity-50" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`neon-border bg-gradient-card relative group hover:shadow-glow transition-all duration-300 ${
                  plan.popular ? 'scale-105 shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className={`mx-auto p-3 rounded-xl bg-gradient-primary shadow-neon mb-4 w-fit`}>
                    <plan.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-lg">{plan.description}</CardDescription>
                  <div className="text-4xl font-bold hero-text mt-4">
                    {plan.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-neon-green" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/login" className="block">
                    <Button 
                      variant={plan.popular ? "hero" : "neon"} 
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            Feature Comparison
          </h2>
          
          <Card className="neon-border bg-gradient-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-4 px-6">Features</th>
                    <th className="text-center py-4 px-6">Basic</th>
                    <th className="text-center py-4 px-6">Premium</th>
                    <th className="text-center py-4 px-6">Family Pack</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { feature: "Waste Capacity", basic: "5kg", premium: "15kg", family: "25kg" },
                    { feature: "IoT Monitoring", basic: "✓", premium: "✓", family: "✓" },
                    { feature: "AI Optimization", basic: "Basic", premium: "Advanced", family: "Advanced" },
                    { feature: "Mobile App", basic: "✓", premium: "✓", family: "✓" },
                    { feature: "Solar Integration", basic: "✗", premium: "✓", family: "✓" },
                    { feature: "Weather Resistance", basic: "✗", premium: "✓", family: "✓" },
                    { feature: "Multi-chamber", basic: "✗", premium: "✗", family: "✓" },
                    { feature: "Warranty", basic: "3 months", premium: "1 year", family: "2 years" }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border/30 hover:bg-primary/5">
                      <td className="py-3 px-6 font-medium">{row.feature}</td>
                      <td className="py-3 px-6 text-center">{row.basic}</td>
                      <td className="py-3 px-6 text-center">{row.premium}</td>
                      <td className="py-3 px-6 text-center">{row.family}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="neon-border bg-gradient-card">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">
                Ready to Transform Your Waste?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who are already making a positive impact on the environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                  <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="glass" size="lg" className="text-lg px-8 py-3">
                    Learn More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;