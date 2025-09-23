// src/pages/SplashScreen.tsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HandshakeLogo from "@/components/ui/HandshakeLogo"; // Correct path to your new component
const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 9500);

    return () => clearTimeout(timer);
  }, [navigate]); 

  return ( 
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="animate-float mb-8">
          <HandshakeLogo className="w-24 h-24 mx-auto text-primary-foreground drop-shadow-lg" />
        </div>
        <h1 className="text-4xl font-bold text-primary-foreground mb-2">
          PlanEazy
        </h1>
        <p className="text-primary-foreground/80 text-lg">
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;