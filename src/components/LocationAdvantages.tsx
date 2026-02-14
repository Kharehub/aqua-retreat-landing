import { Briefcase, GraduationCap, Heart, ShoppingBag, TrainFront } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    icon: Briefcase,
    title: "IT Hubs",
    items: [
      { name: "Rajiv Gandhi Infotech Park", dist: "5 min" },
      { name: "Infosys Hinjawadi", dist: "8 min" },
      { name: "Wipro Campus", dist: "10 min" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      { name: "Symbiosis International School", dist: "10 min" },
      { name: "Indira College", dist: "15 min" },
      { name: "Blue Ridge Public School", dist: "12 min" },
    ],
  },
  {
    icon: Heart,
    title: "Healthcare",
    items: [
      { name: "Lifepoint Multispeciality Hospital", dist: "8 min" },
      { name: "Aditya Birla Hospital", dist: "15 min" },
      { name: "Columbia Asia Hospital", dist: "20 min" },
    ],
  },
  {
    icon: ShoppingBag,
    title: "Shopping",
    items: [
      { name: "Xion Mall", dist: "5 min" },
      { name: "Westend Mall", dist: "18 min" },
      { name: "Phoenix Mall of the Millennium", dist: "30 min" },
    ],
  },
  {
    icon: TrainFront,
    title: "Transport",
    items: [
      { name: "Hinjawadi Metro (Proposed)", dist: "5 min" },
      { name: "Pune-Mumbai Expressway", dist: "15 min" },
      { name: "Pune Airport", dist: "40 min" },
    ],
  },
];

const LocationAdvantages = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-sans mb-4">Connectivity</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Location <span className="text-gradient-aqua">Advantages</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="animate-in p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-400"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center font-sans text-sm">
                    <span className="text-foreground/80">{item.name}</span>
                    <span className="text-primary font-medium shrink-0 ml-3">{item.dist}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Placeholder map */}
          <div className="animate-in rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center min-h-[200px]">
            <div className="text-center">
              <MapPin className="h-10 w-10 text-primary/30 mx-auto mb-2" />
              <p className="text-muted-foreground text-sm font-sans">Interactive Map</p>
              <p className="text-muted-foreground/50 text-xs font-sans">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { MapPin } from "lucide-react";

export default LocationAdvantages;
