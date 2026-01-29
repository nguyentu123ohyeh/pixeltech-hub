import { Link } from 'react-router-dom';
import { Laptop, Smartphone, Headphones, Cpu, Mouse } from 'lucide-react';
import { categories } from '@/data/products';

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Smartphone,
  Headphones,
  Cpu,
  Mouse,
};

export const Categories = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of tech categories and find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Laptop;
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.name}`}
                className="group glass-card-hover p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-blue-500/30 transition-all">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
