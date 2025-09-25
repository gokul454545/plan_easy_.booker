import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Music4, 
  Baby, 
  GraduationCap, 
  Calendar,
  Gift,
  Cake,
  Users
} from "lucide-react";

const categories = [
  {
    icon: Heart,
    title: "Wedding",
    description: "Complete wedding planning services",
    color: "text-primary"
  },
  {
    icon: Music4,
    title: "Party",
    description: "Birthday and celebration parties",
    color: "text-secondary"
  },
  {
    icon: Baby,
    title: "Baby Shower",
    description: "Welcome new arrivals",
    color: "text-accent"
  },
  {
    icon: GraduationCap,
    title: "Graduation",
    description: "Celebrate achievements",
    color: "text-primary"
  },
  {
    icon: Calendar,
    title: "Anniversary",
    description: "Mark special milestones",
    color: "text-secondary"
  },
  {
    icon: Gift,
    title: "Engagement",
    description: "Celebrate new beginnings",
    color: "text-accent"
  },
  {
    icon: Cake,
    title: "Birthday",
    description: "Make birthdays memorable",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Corporate",
    description: "Professional events",
    color: "text-secondary"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Top Categories
          </h2>
          <p className="text-muted-foreground">
            Choose from our wide range of celebration categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group p-6 hover:shadow-elegant transition-smooth cursor-pointer border-border/50 hover:border-primary/20 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-smooth">
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;