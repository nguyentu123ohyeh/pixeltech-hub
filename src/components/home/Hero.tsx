import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-tech-grid bg-grid opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">New Arrivals 2024</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-foreground">Experience the</span>
              <br />
              <span className="gradient-text">Future of Tech</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Discover cutting-edge gadgets and premium electronics. From powerful laptops to revolutionary smartphones, find everything you need to stay ahead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group btn-glow">
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Supports</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-3xl blur-2xl" />
              <div className="relative glass-card p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60"
                  alt="Featured Laptop"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass-card px-6 py-4 rounded-xl animate-pulse-glow">
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-2xl font-bold gradient-text">$1,899</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
