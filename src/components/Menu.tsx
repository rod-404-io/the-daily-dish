import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const menuItems = [
  {
    image: dish1,
    name: "Lechon Kawali",
    description: "Fresh Atlantic salmon with herbs, spices, and seasonal vegetables",
    price: "PHP ***",
    category: "Seafood",
  },
  {
    image: dish2,
    name: "Glazed Chicken Wings",
    description: "Creamy fettuccine with wild mushrooms and black truffle shavings",
    price: "PHP ***",
    category: "Pasta",
  },
  {
    image: dish3,
    name: "Crispy Fish Fillet",
    description: "28-day aged beef with rosemary butter and red wine reduction",
    price: "PHP ***",
    category: "Grill",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4">
            Signature <span className="text-gradient-gold">Dishes</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover our chef's carefully curated selection of extraordinary flavors
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Category Badge */}
              <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded">
                {item.category}
              </span>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-xl font-display font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex px-8 py-4 border-2 border-primary text-primary font-semibold text-sm rounded uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
