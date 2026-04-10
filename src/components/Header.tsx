import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Videos", href: "#videos" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="SuperClean Home Services" className="h-9 w-9" />
          <span className="font-heading font-bold text-lg text-foreground hidden sm:block">
            SuperClean
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:9292610266" className="hidden sm:inline-flex">
            <Button variant="outline" size="sm" className="gap-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="h-4 w-4" />
              (929) 261-0266
            </Button>
          </a>
          <a href="#booking">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Book Online
            </Button>
          </a>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:9292610266" className="block py-3 text-sm font-semibold text-primary">
            📞 (929) 261-0266
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
