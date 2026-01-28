import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FeaturedBanner = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl glass-card">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-blue-500/20" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-50">
            <img
              src="https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=60"
              alt="Graphics Card"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-16">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Limited Time Offer</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                RTX 4090
                <br />
                <span className="gradient-text">Now Available</span>
              </h2>

              <p className="text-muted-foreground mb-8 text-lg">
                Experience next-gen gaming with the most powerful graphics card ever made. Ray tracing, DLSS 3, and AI-powered performance.
              </p>

              <Link to="/product/4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
