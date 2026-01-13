import { Utensils, Award, Users } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Premium Ingredients",
    description: "We source only the finest, freshest ingredients from local farms and trusted suppliers.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized excellence in culinary arts with multiple prestigious awards.",
  },
  {
    icon: Users,
    title: "Expert Chefs",
    description: "Our team of world-class chefs bring decades of experience to every dish.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4">
            Why Choose <span className="text-gradient-gold">A's Restaurant?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            For over two decades, we've been crafting unforgettable dining experiences 
            that combine tradition with innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {[
            { value: "2025", label: "Est. Year" },
            { value: "10", label: "Expert Chefs" },
            { value: "20+", label: "Menu Items" },
            { value: "1K+", label: "Happy Guests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-2 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
