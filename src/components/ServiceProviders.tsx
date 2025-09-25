import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight } from "lucide-react";
import photographer1 from "@/assets/photographer-1.jpg";
import catering1 from "@/assets/catering-1.jpg";

const photographers = [
  {
    image: photographer1,
    name: "MK Studios",
    location: "Bangalore - Chennai",
    rating: 4.7,
    reviews: 86,
    speciality: "Wedding Photography"
  },
  {
    image: photographer1,
    name: "Win Studios", 
    location: "Bangalore - Chennai",
    rating: 4.5,
    reviews: 72,
    speciality: "Event Photography"
  }
];

const caterers = [
  {
    image: catering1,
    title: "28 items/Plates",
    price: "₹190",
    description: "A grand feast with 28 delicious items including starters, curries, rice, breads, sweets, and salads - perfect for weddings and celebrations.",
    rating: 4.8,
    provider: "Happy Events Co."
  },
  {
    image: catering1,
    title: "28 items/Plates", 
    price: "₹190",
    description: "Including starters, curries, rice, breads, sweets, and salads - perfect for celebrations.",
    rating: 4.7,
    provider: "Royal Caterers"
  }
];

const ServiceProviders = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 space-y-16">
        {/* Photographers Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Popular Photographers
            </h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photographers.map((photographer, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-smooth">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={photographer.image} 
                    alt={photographer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{photographer.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{photographer.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{photographer.location}</p>
                  <p className="text-sm text-muted-foreground">{photographer.speciality}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Catering Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Foods & Catering
            </h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caterers.map((caterer, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-smooth">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={caterer.image} 
                    alt={caterer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{caterer.title}</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-primary">{caterer.price}</span>
                      <span className="text-sm text-muted-foreground">per plate</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{caterer.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{caterer.rating}</span>
                    </div>
                    <Button size="sm" className="text-xs">View</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;