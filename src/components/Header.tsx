import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Sanskriti Events
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth">
            Services
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth">
            How It Works
          </a>
          <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth">
            Contact
          </a>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden border-t bg-background/95 backdrop-blur",
        isMenuOpen ? "block" : "hidden"
      )}>
        <nav className="container py-4 space-y-4">
          <a href="#services" className="block text-sm font-medium text-foreground/80 hover:text-foreground">
            Services
          </a>
          <a href="#how-it-works" className="block text-sm font-medium text-foreground/80 hover:text-foreground">
            How It Works
          </a>
          <a href="#about" className="block text-sm font-medium text-foreground/80 hover:text-foreground">
            About
          </a>
          <a href="#contact" className="block text-sm font-medium text-foreground/80 hover:text-foreground">
            Contact
          </a>
          <div className="flex flex-col gap-3 pt-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;