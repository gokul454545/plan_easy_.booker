import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Store } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to start planning your celebration?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join thousands of happy customers who trust us with their special moments
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-smooth group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Planning</h3>
                <p className="text-white/80 text-sm mb-6">Let our AI help you plan your perfect celebration with smart recommendations</p>
                <Button variant="secondary" size="lg" className="w-full">
                  Try AI
                </Button>
              </div>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-smooth group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Manual Planning</h3>
                <p className="text-white/80 text-sm mb-6">Take full control and manually select every detail for your celebration</p>
                <Button variant="outline" size="lg" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Plan Manually
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;