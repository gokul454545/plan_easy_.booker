import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-primary">
      <div className="text-center">
        <div className="animate-fade-in">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-32 h-32 mx-auto animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Splash;