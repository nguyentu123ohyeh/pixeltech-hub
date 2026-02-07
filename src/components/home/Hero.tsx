import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MousePointer2, Keyboard, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 bg-tech-grid bg-grid opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                Premium Tech Essentials 2026
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">Elevate Your</span>
              <br />
              <span className="gradient-text">Desk Setup</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Discover our collection of sophisticated tech accessories. From retro mechanical keyboards to top-of-the-line protective cases, we bring you the best for your workspace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group px-8 py-7 text-lg rounded-xl shadow-lg shadow-primary/20">
                  Shop Accessories
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-8 py-7 text-lg rounded-xl">
                  About Our Vision
                </Button>
              </Link>
            </div>

            {/* Trust Badges / Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-border/50">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Keyboard className="w-5 h-5" />
                  <span className="text-xl font-bold text-foreground">Premium</span>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Quality Gear</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <MousePointer2 className="w-5 h-5" />
                  <span className="text-xl font-bold text-foreground">Ergo</span>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Design Focused</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xl font-bold text-foreground">Safe</span>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Warranty Included</p>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              {/* Decorative background for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl blur-2xl transform rotate-3" />
              
              <div className="relative glass-card p-10 rounded-[2.5rem] border-white/10 bg-white shadow-2xl">
                <img
                  src="https://m.media-amazon.com/images/I/61yuoPVvjhL._AC_SX466_.jpg" 
                  alt="Featured Retro Keyboard"
                  className="w-full h-auto rounded-2xl object-contain drop-shadow-2xl"
                />
                
                {/* Floating Price Tag */}
                <div className="absolute -bottom-6 -right-6 glass-card px-8 py-5 rounded-2xl animate-pulse-glow border-primary/20 shadow-xl bg-background/80 backdrop-blur-md">
                  <p className="text-xs text-muted-foreground font-medium">Starting from</p>
                  <p className="text-3xl font-bold gradient-text">$4.99</p>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};