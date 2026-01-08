import testimonialTugay from "@/assets/testimonial-tugay.jpg";
import testimonialGorkem from "@/assets/testimonial-gorkem.jpg";
import testimonialBahri from "@/assets/testimonial-bahri.jpg";

const testimonials = [
  {
    name: "Tuğay B.",
    university: "Saint Elizabeth University",
    scholarship: "4 yıllık $148,000 burs",
    screenshotImage: testimonialTugay,
  },
  {
    name: "Görkem T.",
    university: "University of Illinois Chicago",
    scholarship: "$80,000 burs",
    screenshotImage: testimonialGorkem,
  },
  {
    name: "Bahri",
    university: "Çoklu Kabul",
    scholarship: "UIC, South Carolina ve daha fazlası",
    screenshotImage: testimonialBahri,
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
              <div className="mb-4">
                <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                <div className="text-sm text-secondary font-medium">{testimonial.university}</div>
                <div className="text-xs text-muted-foreground">{testimonial.scholarship}</div>
              </div>
              
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src={testimonial.screenshotImage}
                  alt={`${testimonial.name} - Başarı Hikayesi`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
