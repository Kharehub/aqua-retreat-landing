import { useState } from "react";
import { Waves, Dumbbell, Sparkles, Theater, Flame, Tent, Flower2, Trophy as Field, Wind, Gamepad2, BookOpen, Coffee, Baby, Lock, Video, Sun, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tabs = [
  {
    id: "greens",
    label: "Central Greens & Water",
    items: [
      { icon: Waves, name: "Serene Brook", desc: "Flowing water through the property" },
      { icon: Theater, name: "Amphitheater", desc: "Open-air seating arena" },
      { icon: Flame, name: "BBQ Areas", desc: "Outdoor grilling zones" },
      { icon: Tent, name: "Camping Zones", desc: "Outdoor adventure spaces" },
      { icon: Flower2, name: "Reed Beds Park", desc: "Natural landscape gardens" },
      { icon: Field, name: "Multi-purpose Fields", desc: "Open play areas for all" },
    ],
  },
  {
    id: "clubhouse",
    label: "Clubhouse",
    items: [
      { icon: Dumbbell, name: "Aqua Gym", desc: "State-of-the-art fitness center" },
      { icon: Waves, name: "Swimming Pool", desc: "Resort-style swimming" },
      { icon: Wind, name: "Spa, Steam & Sauna", desc: "Relaxation and wellness" },
      { icon: Gamepad2, name: "Indoor Games", desc: "Recreation and entertainment" },
      { icon: BookOpen, name: "Business Center", desc: "Work-from-community spaces" },
      { icon: Coffee, name: "Poolside Café", desc: "Leisure dining by the pool" },
      { icon: Baby, name: "Kids' Play Areas", desc: "Safe spaces for children" },
      { icon: Sparkles, name: "Yoga Room", desc: "Mind and body wellness" },
    ],
  },
  {
    id: "special",
    label: "Special Features",
    items: [
      { icon: Lock, name: "Digital Door Locks", desc: "Smart keyless entry" },
      { icon: Video, name: "Video Door Phones", desc: "Secure visitor screening" },
      { icon: Sun, name: "Solar Water Heating", desc: "Eco-friendly hot water" },
      { icon: Zap, name: "Inverter Provisions", desc: "Uninterrupted power backup" },
    ],
  },
];

const Amenities = () => {
  const [activeTab, setActiveTab] = useState("greens");
  const ref = useScrollAnimation();
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="amenities" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-sans mb-4">World-Class Living</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Premium <span className="text-gradient-aqua">Amenities</span>
          </h2>
          <p className="text-muted-foreground font-sans mt-3 max-w-xl mx-auto">3,150+ sq.m clubhouse with resort-grade facilities</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-in">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                activeTab === t.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {current.items.map((item, i) => (
            <div
              key={item.name}
              className="ripple-effect group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-400"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-sans text-sm">{item.name}</h4>
                  <p className="text-xs text-muted-foreground font-sans">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
