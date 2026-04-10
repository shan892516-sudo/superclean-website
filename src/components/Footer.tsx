import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container-narrow section-padding">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:9292610266" className="hover:text-primary transition-colors font-semibold">
                (929) 261-0266
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5" />
              <span>360 Jericho Tpke, Floral Park, NY 11001</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Mon – Sat: 10 AM – 7 PM</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
            <li><a href="#booking" className="hover:text-primary transition-colors">Get a Quote</a></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Our Location</h3>
          <div className="rounded-lg overflow-hidden border border-border/20">
            <iframe
              title="SuperClean Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8!2d-73.7!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzEyLjAiTiA3M8KwNDInMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border/20 mt-10 pt-6 text-center text-xs text-secondary-foreground/60">
        © {new Date().getFullYear()} SuperClean Home Services Inc. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
