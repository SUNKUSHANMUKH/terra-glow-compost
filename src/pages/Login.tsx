import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    confirmPassword: "" 
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", loginData);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt:", signupData);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="p-3 rounded-xl bg-gradient-primary shadow-neon">
              <Leaf className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              TerraSmart
            </span>
          </Link>
          <h1 className="text-3xl font-bold mb-2 glow-text">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Access your smart composting dashboard
          </p>
        </div>

        {/* Auth Forms */}
        <Card className="glass neon-border">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="data-[state=active]:bg-primary/20">
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-primary/20">
                Sign Up
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10 glass border-primary/30 focus:border-primary/60"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 glass border-primary/30 focus:border-primary/60"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <Link 
                      to="#" 
                      className="text-neon-green hover:text-neon-cyan transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full"
                    size="lg"
                  >
                    Sign In
                  </Button>
                </form>
              </CardContent>
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup">
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-2xl text-center">Create Account</CardTitle>
                <CardDescription className="text-center">
                  Join the eco-revolution and start composting smart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="pl-10 glass border-primary/30 focus:border-primary/60"
                        value={signupData.name}
                        onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10 glass border-primary/30 focus:border-primary/60"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10 glass border-primary/30 focus:border-primary/60"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                        className="pl-10 glass border-primary/30 focus:border-primary/60"
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    By creating an account, you agree to our{" "}
                    <Link to="#" className="text-neon-green hover:text-neon-cyan transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-neon-green hover:text-neon-cyan transition-colors">
                      Privacy Policy
                    </Link>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full"
                    size="lg"
                  >
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Social Login Options */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="glass" className="w-full">
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            
            <Button variant="glass" className="w-full">
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.597-2.043 4.88-.767.857-1.679 1.492-2.707 1.893-.513.2-1.056.3-1.615.3-.559 0-1.102-.1-1.615-.3-1.028-.4-1.94-1.036-2.707-1.893-1.147-1.283-1.874-3.022-2.043-4.88C4.836 8.016 4.969 7.89 5.12 7.89c.054 0 .108.016.158.047.094.057.158.15.175.254.131 1.616.746 3.09 1.735 4.169.989 1.079 2.336 1.674 3.802 1.674s2.813-.595 3.802-1.674c.989-1.079 1.604-2.553 1.735-4.169.017-.104.081-.197.175-.254.05-.031.104-.047.158-.047.151 0 .284.126.282.27z"/>
              </svg>
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;