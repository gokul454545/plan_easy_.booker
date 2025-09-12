import { Button } from "@/components/ui/button";
import { Sparkles, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-celebration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
            <Sparkles className="h-4 w-4" />
            Traditional Indian Function Planning Made Easy
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Celebrate Your
            <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Sacred Moments
            </span>
            with Perfect Planning
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Connect with trusted dealers for all your traditional Indian functions. 
            From marriages to puberty ceremonies, we make your celebrations unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
              Find Services
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Become a Dealer
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                <Users className="h-6 w-6 text-accent" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-white/80">Trusted Dealers</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-6 w-6 text-accent" />
                <span className="text-3xl font-bold">1000+</span>
              </div>
              <p className="text-white/80">Happy Celebrations</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                <Sparkles className="h-6 w-6 text-accent" />
                <span className="text-3xl font-bold">20+</span>
              </div>
              <p className="text-white/80">Service Categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;