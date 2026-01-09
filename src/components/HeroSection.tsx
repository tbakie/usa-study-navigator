import { Play, Instagram, Calendar } from "lucide-react";
import { Button } from "./ui/button";
interface HeroSectionProps {
  onStartQuiz: () => void;
}
const HeroSection = ({
  onStartQuiz
}: HeroSectionProps) => {
  return <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-float" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="relative container mx-auto px-4 pt-12 pb-20">
        {/* Instagram badge */}
        <div className="flex justify-center mb-8">
          <a href="#" className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm text-cream px-4 py-2 rounded-full text-sm border border-card/20 hover:bg-card/20 transition-all">
            <Instagram className="w-4 h-4" />
            <span>@amerikali.tbe</span>
          </a>
        </div>

        {/* Main content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
            Amerika'da{" "}
            <span className="text-gradient">Eğitim Hayalin</span>{" "}
            Burada Başlıyor
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl mb-10 font-body leading-relaxed">
            Üniversite başvuruları, burslar ve Amerikan rüyanı gerçekleştirmek için uzman rehberlik. 
            500+ öğrencinin hedeflerine ulaşmasına yardım ettim.
          </p>
        </div>

        {/* Video section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lifted bg-primary/50 backdrop-blur-sm border border-card/20">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/1J_mPoaYAiM?autoplay=1&mute=1&rel=0"
              title="Amerika'da Eğitim"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Booking CTA directly under video */}
        <div className="max-w-md mx-auto mb-12">
          <Button variant="gold" size="xl" className="w-full" onClick={onStartQuiz}>
            <Calendar className="w-5 h-5" />
            Ücretsiz Görüşme Randevusu Al
          </Button>
          <p className="text-cream/60 text-sm text-center mt-3">
            Hızlı anket sonrası sana özel görüşme
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[{
          number: "500+",
          label: "Öğrenciye Yardım"
        }, {
          number: "$2M+",
          label: "Kazanılan Burs"
        }, {
          number: "%98",
          label: "Başarı Oranı"
        }].map((stat, index) => <div key={index} className="text-center">
              <div className="font-display text-2xl md:text-3xl text-secondary mb-1">
                {stat.number}
              </div>
              <div className="text-cream/60 text-xs md:text-sm">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default HeroSection;