import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    color: "text-primary"
  },
  {
    icon: ChefHat,
    title: "Catering & Food",
    description: "Authentic traditional cuisine, professional catering, and customized menu planning.",
    color: "text-secondary"
  },
  {
    icon: Building,
    title: "Venue Booking",
    description: "Premium halls, gardens, and traditional venues perfect for your celebration.",
    color: "text-accent"
  },
  {
    icon: Music,
    title: "Entertainment & Dance",
    description: "Classical dancers, musicians, DJs, and traditional performers for memorable celebrations.",
    color: "text-primary"
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Decorated cars, horse carriages, and traditional transportation for the occasion.",
    color: "text-secondary"
  },
  {
    icon: Gift,
    title: "Gifts & Favors",
    description: "Traditional gifts, return gifts, and custom favor arrangements for guests.",
    color: "text-accent"
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional wedding and event photography to capture every precious moment.",
    color: "text-primary"
  },
  {
    icon: Lightbulb,
    title: "Lighting & Sound",
    description: "Professional lighting setups and sound systems for the perfect ambiance.",
    color: "text-secondary"
  },
  {
    icon: Shirt,
    title: "Clothing & Styling",
    description: "Traditional attire, jewelry, and styling services for the bride, groom, and family.",
    color: "text-accent"
  },
  {
    icon: Crown,
    title: "Religious Rituals",
    description: "Experienced priests and ritual coordinators for authentic ceremonies.",
    color: "text-primary"
  },
  {
    icon: Cake,
    title: "Sweets & Desserts",
    description: "Traditional sweets, modern cakes, and dessert arrangements for celebrations.",
    color: "text-secondary"
  },
  {
    icon: TreePine,
    title: "Garden & Outdoor",
    description: "Outdoor decoration, garden setups, and natural venue arrangements.",
    color: "text-accent"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Event
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From traditional decorations to modern conveniences, we connect you with 
            verified dealers who understand the cultural significance of your celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group p-6 hover:shadow-elegant transition-smooth cursor-pointer border-border/50 hover:border-primary/20">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <Icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Browse All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;