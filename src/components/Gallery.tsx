import { useState } from "react";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const filters = ["All", "Project Views", "Amenities", "Location", "Lifestyle"];

const images = [
  { id: 1, cat: "Project Views", aspect: "aspect-video" },
  { id: 2, cat: "Amenities", aspect: "aspect-square" },
  { id: 3, cat: "Location", aspect: "aspect-video" },
  { id: 4, cat: "Lifestyle", aspect: "aspect-square" },
  { id: 5, cat: "Project Views", aspect: "aspect-square" },
  { id: 6, cat: "Amenities", aspect: "aspect-video" },
  { id: 7, cat: "Lifestyle", aspect: "aspect-video" },
  { id: 8, cat: "Project Views", aspect: "aspect-square" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useScrollAnimation();

  const filtered = filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-sans mb-4">Visual Tour</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Project <span className="text-gradient-aqua">Gallery</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-in">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setLightbox(img.id)}
            >
              <div
                className={`${img.aspect} rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border border-border overflow-hidden group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-500`}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-aqua-light/20 to-secondary/10">
                  <div className="text-center">
                    <p className="text-muted-foreground/40 font-sans text-xs">{img.cat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white">
              <X className="h-8 w-8" />
            </button>
            <div className="max-w-4xl w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <p className="text-white/40 font-sans">Image Placeholder #{lightbox}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
