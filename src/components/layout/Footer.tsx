import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white section-padding">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-playfair font-bold">
                Hope Foundation
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Transforming lives and building hope in communities worldwide through 
              sustainable development, education, and humanitarian aid.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="social-link">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="social-link">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/projects" className="text-white/80 hover:text-white transition-colors">
                Our Projects
              </Link>
              <Link to="/urgent-appeals" className="text-white/80 hover:text-white transition-colors">
                Urgent Appeals
              </Link>
              <Link to="/volunteer" className="text-white/80 hover:text-white transition-colors">
                Volunteer
              </Link>
              <Link to="/careers" className="text-white/80 hover:text-white transition-colors">
                Careers
              </Link>
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Programs</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/projects/orphan-sponsorship" className="text-white/80 hover:text-white transition-colors">
                Orphan Sponsorship
              </Link>
              <Link to="/projects/water-wells" className="text-white/80 hover:text-white transition-colors">
                Water Well Construction
              </Link>
              <Link to="/projects/mosque-construction" className="text-white/80 hover:text-white transition-colors">
                Masjid Construction
              </Link>
              <Link to="/projects/food-distribution" className="text-white/80 hover:text-white transition-colors">
                Food Pack Distribution
              </Link>
              <Link to="/projects/zakat" className="text-white/80 hover:text-white transition-colors">
                Zakat Giving
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/60" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/60" />
                <span className="text-white/80">info@hopefoundation.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/80">123 Charity Lane, City, State</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold">Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email"
                  className="newsletter-input"
                />
                <Button className="btn-outline-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Hope Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link to="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;