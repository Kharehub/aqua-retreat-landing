import { Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pricingData = [
  { config: "1 BHK", area: "558 – 622 sq.ft", price: "₹78 Lakhs*" },
  { config: "2 BHK", area: "861 – 906 sq.ft", price: "₹1.15 Cr*" },
  { config: "3 BHK", area: "1060 – 1082 sq.ft", price: "₹1.45 Cr*" },
];

const Pricing = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-sans mb-4">Investment</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Transparent <span className="text-gradient-aqua">Pricing</span>
          </h2>
        </div>

        {/* Early bird banner */}
        <div className="animate-in max-w-2xl mx-auto mb-10 p-5 rounded-2xl bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 text-center">
          <Sparkles className="h-6 w-6 text-gold mx-auto mb-2" />
          <p className="font-display text-lg font-semibold text-foreground">Early Bird Offer Available</p>
          <p className="text-muted-foreground text-sm font-sans">Pre-launch prices for limited units only</p>
        </div>

        {/* Pricing table */}
        <div className="max-w-3xl mx-auto mb-12 animate-in">
          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-3 bg-secondary text-secondary-foreground font-sans text-sm font-semibold">
              <div className="p-4">Configuration</div>
              <div className="p-4 text-center">Carpet Area</div>
              <div className="p-4 text-right">Starting Price</div>
            </div>
            {pricingData.map((row, i) => (
              <div key={row.config} className={`grid grid-cols-3 font-sans text-sm ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                <div className="p-4 font-semibold text-foreground">{row.config}</div>
                <div className="p-4 text-center text-muted-foreground">{row.area}</div>
                <div className="p-4 text-right font-bold text-primary">{row.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto animate-in">
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="payment" className="border rounded-xl px-5 bg-card">
              <AccordionTrigger className="font-sans font-semibold text-foreground hover:no-underline">Payment Plan</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans text-sm leading-relaxed">
                <div className="space-y-2">
                  <p>• 10% on Booking</p>
                  <p>• 10% within 30 days</p>
                  <p>• 80% on Possession / As per construction-linked plan</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="frc" className="border rounded-xl px-5 bg-card">
              <AccordionTrigger className="font-sans font-semibold text-foreground hover:no-underline">Floor Rise Charges (FRC)</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans text-sm leading-relaxed">
                Floor rise charges applicable from the 4th floor onwards. Charges vary between ₹50 – ₹100 per sq.ft per floor depending on the tower and configuration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="plc" className="border rounded-xl px-5 bg-card">
              <AccordionTrigger className="font-sans font-semibold text-foreground hover:no-underline">Premium Location Charges (PLC)</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans text-sm leading-relaxed">
                Premium charges may apply for garden-facing, park-facing, and corner units. Contact our sales team for detailed PLC structure.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <p className="text-center text-xs text-muted-foreground/60 font-sans mt-8 animate-in">*Prices are indicative and subject to change. T&C apply.</p>
      </div>
    </section>
  );
};

export default Pricing;
