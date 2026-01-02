import { GraduationCap } from "lucide-react";

const testimonials = [
  {
    name: "Ayşe M.",
    university: "Stanford Üniversitesi",
    scholarship: "$85,000 burs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ahmet K.",
    university: "MIT",
    scholarship: "Tam burs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Zeynep L.",
    university: "UCLA",
    scholarship: "$60,000 burs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Başarı Hikayeleri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gerçek öğrenciler, gerçek sonuçlar. Diğerlerinin Amerikan rüyasına nasıl ulaştığını görün.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card-gradient rounded-2xl p-6 shadow-soft hover:shadow-lifted transition-all duration-300 border border-border/50 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-secondary/30"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-secondary font-medium">{testimonial.university}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.scholarship}</div>
                </div>
              </div>
              
              {/* Placeholder for admission letter - user will add their own images */}
              <div className="aspect-[3/4] rounded-xl bg-muted/50 border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center p-4">
                  <GraduationCap className="w-10 h-10 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Kabul Mektubu</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
