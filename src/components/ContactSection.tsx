import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", config: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim())) e.phone = "Valid 10-digit phone required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `Hi, I'm ${form.name}. I'm interested in ${form.config || "The Aqua Retreat"} at Godrej Park World Hinjawadi.${form.message ? ` Message: ${form.message}` : ""} Phone: ${form.phone}${form.email ? `, Email: ${form.email}` : ""}`;
    const url = `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-ocean relative overflow-hidden wave-bg" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass-dark text-aqua-light text-sm font-sans mb-4">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="animate-in glass-dark rounded-2xl p-8 space-y-5">
            <div>
              <Input
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-white/10 border-white/15 text-white placeholder:text-white/40 font-sans"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1 font-sans">{errors.name}</p>}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-white/10 border-white/15 text-white placeholder:text-white/40 font-sans"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1 font-sans">{errors.email}</p>}
            </div>
            <div>
              <Input
                placeholder="Phone Number *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-white/10 border-white/15 text-white placeholder:text-white/40 font-sans"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1 font-sans">{errors.phone}</p>}
            </div>
            <select
              value={form.config}
              onChange={(e) => setForm({ ...form, config: e.target.value })}
              className="w-full h-10 rounded-md bg-white/10 border border-white/15 text-white/70 px-3 text-sm font-sans"
            >
              <option value="" className="text-foreground">I'm interested in...</option>
              <option value="1 BHK" className="text-foreground">1 BHK (558-622 sq.ft)</option>
              <option value="2 BHK" className="text-foreground">2 BHK (861-906 sq.ft)</option>
              <option value="3 BHK" className="text-foreground">3 BHK (1060-1082 sq.ft)</option>
            </select>
            <textarea
              placeholder="Your Message (Optional)"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md bg-white/10 border border-white/15 text-white placeholder:text-white/40 px-3 py-2 text-sm font-sans resize-none"
            />
            <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold/90 text-white font-sans font-semibold gap-2">
              <Send className="h-4 w-4" />
              Send via WhatsApp
            </Button>
          </form>

          {/* Contact Info */}
          <div className="animate-in flex flex-col justify-center space-y-8" style={{ transitionDelay: "200ms" }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-sans font-semibold text-white mb-1">Call Us</p>
                <a href="tel:+919999999999" className="text-white/70 font-sans hover:text-primary transition-colors">+91 99999 99999</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-sans font-semibold text-white mb-1">Email</p>
                <a href="mailto:sales@godrejaquaretreat.com" className="text-white/70 font-sans hover:text-primary transition-colors">sales@godrejaquaretreat.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-sans font-semibold text-white mb-1">Visit Us</p>
                <p className="text-white/70 font-sans">Godrej Park World, Hinjawadi Phase 1,<br />Pune, Maharashtra 411057</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
