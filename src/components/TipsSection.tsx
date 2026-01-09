import { Users, FileText, DollarSign, Award, Sparkles, CheckCircle2 } from "lucide-react";

const tips = [
  {
    icon: Users,
    title: "1'e 1 Danışmanlık",
    description: "Sana özel yol haritası çıkarıyoruz. Okul listeni beraber oluşturuyor, hedeflerine göre strateji belirliyoruz.",
    highlights: ["Birebir Zoom görüşmeleri", "Kişiye özel okul listesi", "VIP WhatsApp grubu"],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: DollarSign,
    title: "Burs Sırları",
    description: "Çoğu öğrencinin bilmediği gizli bursları ve fonlama fırsatlarını keşfet.",
    highlights: ["Akademik burslar", "Sporcu & sanat bursları", "Türk vatandaşlarına özel burslar"],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
  },
  {
    icon: FileText,
    title: "Başvuru Stratejisi",
    description: "Binlerce başvurucu arasından sıyrılan güçlü dosyalar hazırlıyoruz.",
    highlights: ["Etkileyici essay yazımı", "Referans mektupları", "Amerikan usulü CV/Resume"],
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Award,
    title: "Garanti Okul Kabul",
    description: "A-B-C sistemimizle en iyi okullardan burs alabileceğin popüler okullara kadar başvuru yapıyoruz.",
    highlights: ["Top üniversiteler", "Transfer imkanı olan 2 yıllık okullar", "Burs garantili okullar"],
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
  },
];

const TipsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Profesyonel Danışmanlık</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Sana Nasıl Yardım Edebilirim
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Amerika'daki en iyi üniversitelere giden yolculuğunun her adımında yanındayım
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-lifted hover:-translate-y-2 transition-all duration-300 border border-border/50 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tip.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-14 h-14 rounded-xl ${tip.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <tip.icon className={`w-7 h-7 bg-gradient-to-br ${tip.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                <tip.icon className={`w-7 h-7 absolute`} style={{ 
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }} />
              </div>
              
              <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {tip.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {tip.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {tip.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
