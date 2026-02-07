import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">Kali Clark</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium technology destination. We specialize in cutting-edge laptops, smartphones, and professional tech accessories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:text-primary transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:text-primary transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:text-primary transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:text-primary transition-all"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Customer Service - THÊM MỚI */}
          <div>
            <h3 className="font-bold text-foreground mb-6 uppercase text-xs tracking-widest">Customer Service</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Help Center</Link></li>
              <li><Link to="/shipping-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Shipping Information</Link></li>
              <li><Link to="/refund-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Legal - THÊM MỚI */}
          <div>
            <h3 className="font-bold text-foreground mb-6 uppercase text-xs tracking-widest">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/policies" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/policies" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/policies" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Settings</Link></li>
            </ul>
          </div>

          {/* Contact - GIỮ NGUYÊN THÔNG TIN CỦA BẠN */}
          <div>
            <h3 className="font-bold text-foreground mb-6 uppercase text-xs tracking-widest">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>1st Avenue 3201, Columbus, Georgia 31904, USA</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+13372593713" className="hover:text-primary transition-colors">+1 337-259-3713</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:mjsmmtt08210@hotmail.com" className="hover:text-primary transition-colors">mjsmmtt08210@hotmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods - THÊM MỚI ĐỂ TĂNG ĐỘ TIN CẬY */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Secure Checkout
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Truck className="w-4 h-4" /> Worldwide Shipping
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <RotateCcw className="w-4 h-4" /> 30-Day Returns
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:text-left">
          <p className="text-muted-foreground text-[11px] uppercase tracking-widest">
            © 2026 Kali Clark Technology Group. All rights reserved. Registered Office: Columbus, Georgia.
          </p>
        </div>
      </div>
    </footer>
  );
};