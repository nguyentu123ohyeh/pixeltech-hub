import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FeaturedBanner = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-secondary/30 border border-border group">
          {/* Background Gradient & Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          
          {/* Product Image Section - Sửa hiển thị full ảnh */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-64 lg:h-full opacity-80 lg:opacity-100">
            <img
              src="https://m.media-amazon.com/images/I/61C1XyZ-0CL._AC_SX466_.jpg" 
              alt="Retro Typewriter Keyboard"
              className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay để chữ dễ đọc hơn trên mobile */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background via-background/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-20">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Must-Have Accessory</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Classic Style,
                <br />
                <span className="text-primary">Modern Power.</span>
              </h2>

              <p className="text-muted-foreground mb-10 text-lg lg:text-xl leading-relaxed">
                Nâng tầm góc làm việc với bàn phím cơ Retro Typewriter. Cảm giác gõ phím cổ điển kết hợp cùng công nghệ kết nối hiện đại.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/product/22">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl group text-lg">
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="px-8 py-6 rounded-xl border-border hover:bg-secondary text-lg">
                    Ask Kali Clark
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};