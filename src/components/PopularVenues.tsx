import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ChevronRight } from "lucide-react";
import venue1 from "@/assets/venue-1.jpg";
import venue2 from "@/assets/venue-2.jpg";

const venues = [
  {
    image: venue1,
    name: "Taj Hotel",
    location: "Bangalore - Chennai",
    rating: 4.7,
    reviews: 128,
    type: "Luxury Hotel"
  },
  {
    image: venue2,
    name: "Shree Palace",
    location: "Bangalore - Chennai", 
    rating: 4.4,
    reviews: 95,
    type: "Banquet Hall"
  }
];

const PopularVenues = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Most Popular Venues
          </h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {venues.map((venue, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-smooth">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={venue.image} 
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{venue.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{venue.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{venue.location}</span>
                </div>
                <p className="text-sm text-muted-foreground">{venue.type}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVenues;