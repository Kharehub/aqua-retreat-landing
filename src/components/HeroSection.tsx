import { ArrowDown, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="project" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-ocean wave-bg">
      {/* Floating bubbles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5 border border-white/10"
          style={{
            width: `${40 + i * 30}px`,
            height: `${40 + i * 30}px`,
            left: `${10 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
            animation: `float ${5 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <div className="inline-block mb-6 px-5 py-2 rounded-full glass-dark text-sm text-aqua-light font-sans tracking-wide">
          Godrej Park World, Hinjawadi Phase 1
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
          A Life of Leisure Inspired by the{" "}
          <span className="text-gradient-gold">Way of Water</span>{" "}
          Awaits
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
          Soak in the Essence of Aqua Living with a Serene Brook Flowing Amidst 12+ Acres of Central Greens
        </p>

        {/* Price Badge */}
        <div className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-gold/20 border border-gold/40 backdrop-blur-sm">
          <span className="text-gold font-display text-lg md:text-2xl font-semibold">Starting ₹78 Lakhs*</span>
          <span className="w-px h-6 bg-gold/40" />
          <span className="text-white/80 font-sans text-sm md:text-base">1, 2 & 3 BHK</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-sans gap-2 shadow-lg shadow-primary/30">
            <Download className="h-5 w-5" />
            Download Brochure
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-sans gap-2">
            <Calendar className="h-5 w-5" />
            Schedule Site Visit
          </Button>
        </div>

        {/* RERA */}
        <p className="text-white/30 text-xs font-sans">RERA Registration No: P52100054971</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="h-5 w-5 text-white/40" />
      </div>
    </section>
  );
};

export default HeroSection;
