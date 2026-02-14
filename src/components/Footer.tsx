import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {/* Branding */}
        <div>
          <h3 className="font-display text-xl font-bold mb-2">The Aqua Retreat</h3>
          <p className="text-secondary-foreground/60 text-sm font-sans">A Godrej Properties Development</p>
          <p className="text-secondary-foreground/60 text-sm font-sans mt-1">Godrej Park World, Hinjawadi Phase 1, Pune</p>
        </div>
        {/* Links */}
        <div>
          <h4 className="font-sans font-semibold mb-3 text-sm uppercase tracking-wider text-secondary-foreground/70">Quick Links</h4>
          <div className="space-y-2 font-sans text-sm">
            <a href="#project" className="block text-secondary-foreground/60 hover:text-primary transition-colors">Project</a>
            <a href="#amenities" className="block text-secondary-foreground/60 hover:text-primary transition-colors">Amenities</a>
            <a href="#contact" className="block text-secondary-foreground/60 hover:text-primary transition-colors">Contact</a>
            <a href="#" className="block text-secondary-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="block text-secondary-foreground/60 hover:text-primary transition-colors">Terms & Conditions</a>
          </div>
        </div>
        {/* RERA & Social */}
        <div>
          <h4 className="font-sans font-semibold mb-3 text-sm uppercase tracking-wider text-secondary-foreground/70">RERA Details</h4>
          <p className="text-secondary-foreground/60 text-sm font-sans mb-4">RERA Registration No: P52100054971</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 pt-6">
        <p className="text-xs text-secondary-foreground/40 font-sans text-center leading-relaxed max-w-3xl mx-auto">
          Disclaimer: This website is for informational purposes only and does not constitute an offer or contract. The developer reserves the right to make changes in the project. Images shown are artistic impressions and for representational purposes only. Please refer to the actual plans and specifications before making any purchase decision.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
