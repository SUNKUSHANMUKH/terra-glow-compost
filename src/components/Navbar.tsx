import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Statistics", href: "/statistics" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Login", href: "/login" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-xl bg-gradient-primary shadow-neon group-hover:shadow-glow transition-all duration-300">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              TerraSmart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-all duration-300",
                  "hover:text-neon-green",
                  isActive(item.href)
                    ? "text-neon-green"
                    : "text-foreground/80"
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-neon-green"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 glass border-b border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-all duration-300",
                  isActive(item.href)
                    ? "text-neon-green bg-primary/10"
                    : "text-foreground/80 hover:text-neon-green hover:bg-primary/5"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button variant="hero" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;