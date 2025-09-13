import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to dashboard (replace with actual auth later)
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <div className="w-full max-w-md animate-slide-up">
        <div className="text-center mb-8">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-16 h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-white">Welcome</h1>
          <p className="text-white/80">
            {isSignUp ? "Create your account" : "Sign in to your account"}
          </p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader className="space-y-4">
            <CardTitle className="text-center">
              {isSignUp ? "Sign Up" : "Login"}
            </CardTitle>
            <div className="flex justify-center space-x-1">
              <Button
                variant={!isSignUp ? "default" : "outline"}
                size="sm"
                onClick={() => setIsSignUp(false)}
              >
                Login
              </Button>
              <Button
                variant={isSignUp ? "default" : "outline"}
                size="sm"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={isSignUp ? "Create a password" : "Enter your password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;