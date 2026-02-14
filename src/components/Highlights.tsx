import { Trees, Droplets, Trophy, Clock, MapPinned, Palmtree } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Trees, title: "12+ Acres of Central Greens", desc: "Expansive green spaces for a life connected to nature" },
  { icon: Droplets, title: "Water-Inspired Design", desc: "A serene brook flowing through the heart of the community" },
  { icon: Trophy, title: "India's No.1 Developer", desc: "Godrej Properties — the most trusted name in real estate" },
  { icon: Clock, title: "128-Year Legacy", desc: "Over a century of Godrej trust, quality, and innovation" },
  { icon: MapPinned, title: "Prime IT Hub Location", desc: "Minutes from Rajiv Gandhi Infotech Park, Hinjawadi" },
  { icon: Palmtree, title: "Resort-Style Living", desc: "World-class amenities rivaling 5-star resorts" },
];

const Highlights = () => {
  const ref = useScrollAnimation();

  return (
    <section id="highlights" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-sans mb-4">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Unique <span className="text-gradient-aqua">Highlights</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="animate-in ripple-effect group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <h.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
