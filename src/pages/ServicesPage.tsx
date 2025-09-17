import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Flower2, 
  ChefHat, 
  Building, 
  Music, 
  Car, 
  Gift,
  Camera,
  Lightbulb,
  Shirt,
  Crown,
  Cake,
  TreePine
} from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Decoration & Mandap",
    description: "Beautiful traditional decorations, mandap setups, and floral arrangements for your special day.",
    color: "text-primary",
    features: ["Traditional Mandap Setup", "Floral Arrangements", "Theme Decorations", "Stage Design"]
  },
  {
    icon: ChefHat,
    title: "Catering & Food",
    description: "Authentic traditional cuisine, professional catering, and customized menu planning.",
    color: "text-secondary",
    features: ["Traditional Cuisine", "Custom Menu Planning", "Live Counters", "Dessert Stations"]
  },
  {
    icon: Building,
    title: "Venue Booking",
    description: "Premium halls, gardens, and traditional venues perfect for your celebration.",
    color: "text-accent",
    features: ["Banquet Halls", "Garden Venues", "Palace Locations", "Beach Resorts"]
  },
  {
    icon: Music,
    title: "Entertainment & Dance",
    description: "Classical dancers, musicians, DJs, and traditional performers for memorable celebrations.",
    color: "text-primary",
    features: ["Classical Dancers", "Live Musicians", "DJ Services", "Folk Performers"]
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Decorated cars, horse carriages, and traditional transportation for the occasion.",
    color: "text-secondary",
    features: ["Decorated Vehicles", "Horse Carriages", "Vintage Cars", "Luxury Transport"]
  },
  {
    icon: Gift,
    title: "Gifts & Favors",
    description: "Traditional gifts, return gifts, and custom favor arrangements for guests.",
    color: "text-accent",
    features: ["Return Gifts", "Traditional Items", "Custom Packaging", "Guest Favors"]
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional wedding and event photography to capture every precious moment.",
    color: "text-primary",
    features: ["Wedding Photography", "Candid Shots", "Drone Coverage", "Photo Albums"]
  },
  {
    icon: Lightbulb,
    title: "Lighting & Sound",
    description: "Professional lighting setups and sound systems for the perfect ambiance.",
    color: "text-secondary",
    features: ["Stage Lighting", "Sound Systems", "LED Displays", "Special Effects"]
  },
  {
    icon: Shirt,
    title: "Clothing & Styling",
    description: "Traditional attire, jewelry, and styling services for the bride, groom, and family.",
    color: "text-accent",
    features: ["Bridal Wear", "Groom Attire", "Family Outfits", "Jewelry & Accessories"]
  },
  {
    icon: Crown,
    title: "Religious Rituals",
    description: "Experienced priests and ritual coordinators for authentic ceremonies.",
    color: "text-primary",
    features: ["Experienced Priests", "Ritual Coordination", "Sacred Materials", "Ceremony Planning"]
  },
  {
    icon: Cake,
    title: "Sweets & Desserts",
    description: "Traditional sweets, modern cakes, and dessert arrangements for celebrations.",
    color: "text-secondary",
    features: ["Traditional Sweets", "Wedding Cakes", "Dessert Counters", "Live Preparation"]
  },
  {
    icon: TreePine,
    title: "Garden & Outdoor",
    description: "Outdoor decoration, garden setups, and natural venue arrangements.",
    color: "text-accent",
    features: ["Garden Setup", "Outdoor Lighting", "Natural Decor", "Weather Protection"]
  }
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">All Services</h1>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Event
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Services Directory
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our comprehensive range of services for your perfect celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group p-6 hover:shadow-elegant transition-smooth cursor-pointer border-border/50 hover:border-primary/20">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth flex-shrink-0`}>
                        <Icon className={`h-7 w-7 ${service.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-smooth">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-foreground/80">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" size="sm" className="w-full group-hover:border-primary/50 transition-smooth">
                      View Providers
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate('/auth')}>
              Get Started with PlanEazy
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;