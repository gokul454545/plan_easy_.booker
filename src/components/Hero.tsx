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
          {/* Image Carousel */}
          <div className="relative w-full max-w-md mx-auto mb-8">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/20">
              <img 
                src={heroImage} 
                alt="Wedding Anniversary - Every Occasion Meets Perfection"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-lg font-semibold text-white">Every Occasion Meets Perfection</p>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
            <Sparkles className="h-4 w-4" />
            Ready to Organize a plan with
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
          <div className="flex flex-row gap-4 justify-center items-center pt-8 max-w-xs mx-auto">
            <Button variant="hero" size="lg" className="flex-1 text-lg px-6 py-4">
              AI
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="flex-1 text-lg px-6 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Manual
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