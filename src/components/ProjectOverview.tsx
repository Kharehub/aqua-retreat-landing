import { MapPin, Building2, Calendar, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const details = [
  { icon: Building2, label: "Project", value: "The Aqua Retreat" },
  { icon: MapPin, label: "Location", value: "Hinjawadi Phase 1, Pune" },
  { icon: Layers, label: "Towers", value: "T1 – T7" },
  { icon: Calendar, label: "Possession", value: "Coming Soon" },
];

const configs = [
  { type: "1 BHK", area: "558 – 622 sq.ft", color: "from-primary/20 to-primary/5" },
  { type: "2 BHK", area: "861 – 906 sq.ft", color: "from-secondary/20 to-secondary/5" },
  { type: "3 BHK", area: "1060 – 1082 sq.ft", color: "from-accent/20 to-accent/5" },
];

const ProjectOverview = () => {
  const ref = useScrollAnimation();

  return (
    <section id="overview" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-sans mb-4">Project Overview</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Discover <span className="text-gradient-aqua">Aqua Living</span>
          </h2>
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {details.map((d, i) => (
            <div
              key={d.label}
              className="animate-in ripple-effect group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <d.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider mb-1">{d.label}</p>
              <p className="font-display text-lg font-semibold text-foreground">{d.value}</p>
            </div>
          ))}
        </div>

        {/* Config cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {configs.map((c, i) => (
            <div
              key={c.type}
              className={`animate-in ripple-effect group p-8 rounded-2xl bg-gradient-to-br ${c.color} border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 text-center`}
              style={{ transitionDelay: `${(i + 4) * 100}ms` }}
            >
              <h3 className="font-display text-3xl font-bold text-foreground mb-2">{c.type}</h3>
              <p className="text-muted-foreground font-sans">Carpet Area</p>
              <p className="text-primary font-semibold font-sans text-lg mt-1">{c.area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
