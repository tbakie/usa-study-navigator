import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    university: "Stanford University",
    scholarship: "$85,000 scholarship",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote: "I never thought I could afford studying in the US until I found this guidance. Now I'm living my dream at Stanford!",
  },
  {
    name: "Ahmed K.",
    university: "MIT",
    scholarship: "Full ride scholarship",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "The application process seemed impossible, but step by step, I got into MIT with a full scholarship.",
  },
  {
    name: "Maria L.",
    university: "UCLA",
    scholarship: "$60,000 scholarship",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "Best decision I ever made. The personalized advice made all the difference in my application.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real students, real results. See how others achieved their American dream.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card-gradient rounded-2xl p-6 shadow-soft hover:shadow-lifted transition-all duration-300 border border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary/30"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-secondary font-medium">{testimonial.university}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.scholarship}</div>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
