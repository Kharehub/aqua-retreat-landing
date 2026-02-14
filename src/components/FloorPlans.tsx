import { useState } from "react";
import { Download, BedDouble, Bath, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    id: "1bhk",
    label: "1 BHK",
    carpet: "558 – 622 sq.ft",
    bedrooms: 1,
    bathrooms: 1,
    highlights: ["Living + Dining", "Bedroom", "Kitchen", "Balcony"],
  },
  {
    id: "2bhk",
    label: "2 BHK",
    carpet: "861 – 906 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    highlights: ["Living + Dining", "Master Bedroom", "Second Bedroom", "Kitchen", "2 Balconies"],
  },
  {
    id: "3bhk",
    label: "3 BHK",
    carpet: "1060 – 1082 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    highlights: ["Living + Dining", "Master Suite", "Two Bedrooms", "Kitchen", "Utility", "3 Balconies"],
  },
];

const FloorPlans = () => {
  const [active, setActive] = useState("2bhk");
  const ref = useScrollAnimation();
  const plan = plans.find((p) => p.id === active)!;

  return (
    <section id="floorplans" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-sans mb-4">Configurations</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Floor <span className="text-gradient-aqua">Plans</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 animate-in">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                active === p.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:text-primary"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Plan display */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center animate-in">
          {/* Placeholder image */}
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center">
            <div className="text-center p-8">
              <Maximize className="h-16 w-16 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground font-sans text-sm">Floor Plan Image</p>
              <p className="text-muted-foreground/60 font-sans text-xs mt-1">{plan.label} Layout</p>
            </div>
          </div>

          {/* Details */}
          <div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-2">{plan.label}</h3>
            <p className="text-primary font-sans font-semibold text-lg mb-6">{plan.carpet} Carpet Area</p>

            <div className="flex gap-6 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground font-sans">
                <BedDouble className="h-5 w-5 text-primary" />
                <span>{plan.bedrooms} Bedroom{plan.bedrooms > 1 ? "s" : ""}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-sans">
                <Bath className="h-5 w-5 text-primary" />
                <span>{plan.bathrooms} Bathroom{plan.bathrooms > 1 ? "s" : ""}</span>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              {plan.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 font-sans text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {h}
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground gap-2 font-sans">
              <Download className="h-4 w-4" />
              Download {plan.label} Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
