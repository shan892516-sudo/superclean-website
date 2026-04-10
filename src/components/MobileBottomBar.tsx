import { Phone, CalendarCheck } from "lucide-react";

const MobileBottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border safe-area-bottom">
    <div className="grid grid-cols-2 gap-2 p-3">
      <a
        href="tel:9292610266"
        className="flex items-center justify-center gap-2 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <a
        href="#booking"
        className="flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
      >
        <CalendarCheck className="h-4 w-4" /> Book Online
      </a>
    </div>
  </div>
);

export default MobileBottomBar;
