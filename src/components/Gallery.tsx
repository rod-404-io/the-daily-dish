import heroImage from "@/assets/hero-food.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const images = [
  { src: heroImage, alt: "Restaurant ambiance", span: "col-span-2 row-span-2" },
  { src: dish1, alt: "Grilled salmon", span: "" },
  { src: dish2, alt: "Truffle pasta", span: "" },
  { src: dish3, alt: "Prime ribeye", span: "col-span-2" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4">
            Visual <span className="text-gradient-gold">Feast</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A glimpse into our culinary world and dining experience
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
