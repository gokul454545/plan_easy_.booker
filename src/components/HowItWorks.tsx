import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Star, Calendar, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Services",
    description: "Explore our wide range of traditional function services, from decorations to catering, all in one place.",
    number: "01"
  },
  {
    icon: Star,
    title: "Check Ratings",
    description: "Read reviews and ratings from previous customers to choose the best dealers for your celebration.",
    number: "02"
  },
  {
    icon: MessageCircle,
    title: "Connect & Discuss",
    description: "Chat directly with dealers to discuss your requirements, get quotes, and customize your services.",
    number: "03"
  },
  {
    icon: Calendar,
    title: "Book & Celebrate",
    description: "Confirm your booking, coordinate the details, and enjoy your perfectly planned traditional function.",
    number: "04"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Planning your traditional function has never been easier. Follow these simple steps 
            to connect with the best service providers in your area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="p-8 text-center group hover:shadow-elegant transition-smooth bg-card border-border/50">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>

                  <div className="space-y-6 pt-4">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-smooth">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary/30 transform -translate-y-1/2" />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 space-y-6">
          <p className="text-lg text-muted-foreground">
            Ready to start planning your celebration?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start as Customer
            </Button>
            <Button variant="outline" size="lg">
              Join as Dealer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;