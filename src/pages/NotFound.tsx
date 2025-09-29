import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold hero-text">404</h1>
          <h2 className="text-3xl font-bold glow-text">Page Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Oops! The page you're looking for seems to have composted into something else.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="hero" size="lg" className="gap-2">
              <Home className="h-5 w-5" />
              Return Home
            </Button>
          </Link>
          <Button 
            variant="glass" 
            size="lg" 
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
