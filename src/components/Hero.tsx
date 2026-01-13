import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious gourmet dishes"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            BEST QUALITY
            <br />
            <span className="text-gradient-gold">FOOD</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Experience the finest culinary artistry with our expertly crafted dishes. 
            Fresh ingredients, bold flavors, and unforgettable moments await you.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded uppercase tracking-wider hover:bg-gold-light transition-all duration-300 glow-gold"
            >
              Book a Table
            </a>
            <a
              href="#menu"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold text-sm rounded uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
