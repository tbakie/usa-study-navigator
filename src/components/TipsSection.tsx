import { Lightbulb, FileText, DollarSign, GraduationCap } from "lucide-react";

const tips = [
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Learn how to choose the right university based on your goals, budget, and career aspirations.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: FileText,
    title: "Application Strategy",
    description: "Craft compelling essays and applications that stand out from thousands of applicants.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: DollarSign,
    title: "Scholarship Secrets",
    description: "Discover hidden scholarships and funding opportunities that most students don't know about.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Lightbulb,
    title: "Visa Guidance",
    description: "Navigate the F-1 visa process with confidence and avoid common mistakes.",
    color: "bg-amber-500/10 text-amber-600",
  },
];

const TipsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            How I Can Help You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert guidance at every step of your journey to American universities
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 border border-border/50"
            >
              <div className={`w-12 h-12 rounded-xl ${tip.color} flex items-center justify-center mb-4`}>
                <tip.icon className="w-6 h-6" />
              </div>
              
              <h3 className="font-display text-lg text-foreground mb-2">
                {tip.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
