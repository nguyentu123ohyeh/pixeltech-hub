import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Policies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "privacy");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["privacy", "terms", "shipping"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams({ tab: value });
  };

  return (
    <Layout>
      <div className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Legal Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
              Policies & <span className="gradient-text">Terms</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Please review our policies carefully. Your continued use of Kali Clark 
              services constitutes acceptance of these terms.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="w-full grid grid-cols-3 bg-secondary/50 mb-8 p-1">
                <TabsTrigger value="privacy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                  Privacy Policy
                </TabsTrigger>
                <TabsTrigger value="terms" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                  Terms of Service
                </TabsTrigger>
                <TabsTrigger value="shipping" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                  Shipping & Returns
                </TabsTrigger>
              </TabsList>

              {/* Privacy Policy */}
              <TabsContent value="privacy" className="glass-card p-8 focus-visible:outline-none">
                <h2 className="text-2xl font-bold mb-2">Privacy Policy</h2>
                <p className="text-xs text-muted-foreground mb-8 uppercase tracking-widest">Last updated: February 7, 2026</p>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-4">1. Introduction</h3>
                    <p className="mb-4">
                      <strong>Kali Clark</strong> ("we," "our," or "us") respects your privacy and is committed to protecting 
                      your personal data. This policy explains how we collect, use, and safeguard 
                      your information when you shop for tech products on our site.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-4">2. Information We Collect</h3>
                    <p className="mb-4">We collect information that you provide directly, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Personal Identity:</strong> Name, email, phone number (+1 337-259-3713), and shipping address.</li>
                      <li><strong>Payment Details:</strong> Securely processed billing information.</li>
                      <li><strong>Technical Data:</strong> IP address, device type, and browsing behavior.</li>
                    </ul>
                  </section>

                  <Separator />

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-4">3. Contact Information</h3>
                    <p>
                      For privacy inquiries, please contact our support at: 
                      <br /><strong className="text-foreground">mjsmmtt08210@hotmail.com</strong>
                      <br />Address: 1st Avenue 3201, Columbus, Georgia, 31904.
                    </p>
                  </section>
                </div>
              </TabsContent>

              {/* Terms of Service */}
              <TabsContent value="terms" className="glass-card p-8 focus-visible:outline-none">
                <h2 className="text-2xl font-bold mb-2">Terms of Service</h2>
                <p className="text-xs text-muted-foreground mb-8 uppercase tracking-widest">Last updated: February 7, 2026</p>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-4">1. Agreement to Terms</h3>
                    <p>
                      By accessing <strong>Kali Clark</strong>, you agree to be bound by these Terms. 
                      We provide premium technology hardware and accessories subject to your compliance with these rules.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-4">2. Tech Product Usage</h3>
                    <p>
                      Users are responsible for ensuring software compatibility before purchase. All products 
                      are intended for lawful use only. Any attempt to gain unauthorized access to our 
                      systems will result in immediate termination of service.
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-4">3. Governing Law</h3>
                    <p>
                      These Terms are governed by the laws of the State of Georgia, USA. Any legal actions 
                      shall be settled in the courts of Columbus, GA.
                    </p>
                  </section>
                </div>
              </TabsContent>

              {/* Shipping & Returns */}
              <TabsContent value="shipping" className="glass-card p-8 focus-visible:outline-none">
                <h2 className="text-2xl font-bold mb-2">Shipping & Returns</h2>
                <p className="text-xs text-muted-foreground mb-8 uppercase tracking-widest">Last updated: February 7, 2026</p>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Shipping Information</h3>
                    <p className="mb-6">
                      We offer worldwide express shipping for all our tech gear. Every order is 
                      insured and includes a tracking number.
                    </p>
                    
                    <div className="overflow-x-auto rounded-xl border border-border">
                      <table className="w-full text-sm">
                        <thead className="bg-secondary/50">
                          <tr className="border-b border-border">
                            <th className="text-left py-4 px-4 font-semibold text-foreground">Method</th>
                            <th className="text-left py-4 px-4 font-semibold text-foreground">Est. Time</th>
                            <th className="text-left py-4 px-4 font-semibold text-foreground">Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="py-4 px-4">Domestic (US)</td>
                            <td className="py-4 px-4">3-5 business days</td>
                            <td className="py-4 px-4">Free</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-4 px-4">International</td>
                            <td className="py-4 px-4">7-14 business days</td>
                            <td className="py-4 px-4">$25.00</td>
                          </tr>
                          <tr>
                            <td className="py-4 px-4">Next Day Air</td>
                            <td className="py-4 px-4">24 Hours</td>
                            <td className="py-4 px-4">$45.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <Separator />

                  <section>
                    <h3 className="text-lg font-semibold text-foreground mb-4">30-Day Return Policy</h3>
                    <p className="mb-4">
                      We accept returns for electronic items in original, unopened condition within 30 days. 
                      Software or items with broken seals are non-returnable.
                    </p>
                    <p>
                      To initiate a return or report a defect, contact: 
                      <br /><strong>mjsmmtt08210@hotmail.com</strong> or <strong>+1 337-259-3713</strong>.
                    </p>
                  </section>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policies;