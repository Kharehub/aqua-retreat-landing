import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WaveDivider from "@/components/WaveDivider";
import ProjectOverview from "@/components/ProjectOverview";
import Highlights from "@/components/Highlights";
import Amenities from "@/components/Amenities";
import FloorPlans from "@/components/FloorPlans";
import Pricing from "@/components/Pricing";
import LocationAdvantages from "@/components/LocationAdvantages";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <WaveDivider />
      <ProjectOverview />
      <Highlights />
      <Amenities />
      <FloorPlans />
      <Pricing />
      <LocationAdvantages />
      <Gallery />
      <ContactSection />
      <WhatsAppButton />
      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 glass border-t border-border">
        <div className="flex gap-2">
          <a href="tel:+919999999999" className="flex-1 py-3 text-center rounded-xl bg-primary text-primary-foreground font-sans font-semibold text-sm">
            Call Now
          </a>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20The%20Aqua%20Retreat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 text-center rounded-xl bg-[hsl(142,70%,45%)] text-white font-sans font-semibold text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
