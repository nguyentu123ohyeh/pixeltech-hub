import { Zap, Target, Heart, Users, Award, TrendingUp } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We constantly push boundaries to bring you the latest in technology.',
  },
  {
    icon: Heart,
    title: 'Customer Obsessed',
    description: 'Your satisfaction drives everything we do, from selection to support.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Every product we sell meets our rigorous quality standards.',
  },
  {
    icon: TrendingUp,
    title: 'Always Growing',
    description: 'We evolve with technology to stay ahead of the curve.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">About TechNova</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powering the <span className="gradient-text">Future</span> of Tech
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Since our founding, TechNova has been at the forefront of the technology revolution.
              We believe that everyone deserves access to cutting-edge devices that enhance their
              lives, work, and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At TechNova, we're more than just a tech retailer. We're your trusted partner in
                navigating the ever-evolving world of technology. Our mission is simple: to provide
                you with the best products, exceptional service, and expert guidance to help you
                make informed decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a professional seeking powerful workstations, a gamer chasing the
                ultimate experience, or someone looking for everyday tech solutions, we've got you
                covered. Our carefully curated selection ensures that every product meets our high
                standards of quality and performance.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl blur-xl" />
              <div className="relative glass-card p-8 rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60"
                  alt="Team working"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every interaction we have
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card-hover p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Leadership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary behind TechNova
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="glass-card-hover p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                <Users className="w-16 h-16 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Kali Clark</h3>
              <p className="text-primary font-medium mb-4">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                With over a decade of experience in the tech industry, Kali founded TechNova with
                a vision to make premium technology accessible to everyone. Her passion for
                innovation and customer satisfaction continues to drive our company forward.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="mailto:mjsmmtt08210@hotmail.com"
                  className="text-primary hover:underline text-sm"
                >
                  mjsmmtt08210@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Products' },
              { value: '50K+', label: 'Happy Customers' },
              { value: '99%', label: 'Satisfaction Rate' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
