import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Alipangpang Pozorrubio"],
  },
  {
    icon: Phone,
    title: "Reservations",
    details: ["0954 415 7002"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon - Fri: 11am - 11pm", "Sat - Sun: 10am - 12am"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@restfood.com", "reservations@restfood.com"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4">
            Make a <span className="text-gradient-gold">Reservation</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Book your table today and experience unforgettable dining
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, index) => (
                  <p key={index} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Reservation Form */}
          <div className="p-8 rounded-lg bg-card border border-border">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              Book Your Table
            </h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="number"
                  placeholder="Number of Guests"
                  min="1"
                  max="20"
                  className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="time"
                  className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <textarea
                placeholder="Special Requests (Optional)"
                rows={4}
                className="w-full px-4 py-3 rounded bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded uppercase tracking-wider hover:bg-gold-light transition-all duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
