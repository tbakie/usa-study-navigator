import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { CheckCircle, BookOpen, Users, Award, ShoppingCart } from "lucide-react";

interface PackageDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageType: "ebook" | "consultation" | "full";
}

const PackageDetailsDialog = ({ open, onOpenChange, packageType }: PackageDetailsDialogProps) => {
  const handleBuyEbook = () => {
    // TODO: Integrate with payment system
    window.open("https://example.com/ebook", "_blank");
  };

  if (packageType === "ebook") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-secondary" />
              $25 E-Kitap - ABD'de Okumak İçin Kapsamlı Rehber
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <p className="text-muted-foreground">
              Bu e-kitapta ABD'de üniversite eğitimi için ihtiyacın olan tüm bilgileri bulacaksın. 
              Adım adım yol haritası, pratik öneriler ve gerçek örneklerle hazırlandı.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Bu e-kitapta neler var?</h4>
              
              <div className="grid gap-3">
                {[
                  "Amerika'daki Okul Seçimleri - Hangi üniversite sana uygun? Devlet vs özel okul farkları, ranking'lerin gerçek anlamı",
                  "Başvuru İçin Neler Gerekli - Common App, Coalition App, Transcript, Diploma denkliği ve tüm belgeler",
                  "Adım Adım Yol Haritası - Ne zaman ne yapmalısın? Lise 9'dan 12'ye kadar detaylı plan",
                  "Burslar ve Finansal Yardım - Merit burs, need-based aid, Türk öğrencilere özel burslar",
                  "Başvuru İçin Neler Lazım - Recommendation letters, extracurricular activities, leadership",
                  "Essay Örnekleri - Kabul almış öğrencilerin gerçek essay'leri ve yazım stratejileri",
                  "Vize Süreci - F1 vizesi için gerekli belgeler ve mülakat ipuçları",
                  "Amerika'da Yaşam - Konaklama, yemek, ulaşım ve bütçe planlaması",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 mt-6">
              <p className="text-sm text-muted-foreground mb-3">
                ✨ 100+ sayfa içerik, sürekli güncellenen bilgiler ve bonus kaynaklar
              </p>
              <Button 
                variant="gold" 
                size="lg" 
                className="w-full"
                onClick={handleBuyEbook}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                E-Kitabı Satın Al - $25
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (packageType === "consultation") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display flex items-center gap-3">
              <Users className="w-6 h-6 text-secondary" />
              $120 Birebir Danışmanlık + VIP WhatsApp Grubu
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <p className="text-muted-foreground">
              Sana özel bir görüşme yapıyor, hedeflerini analiz ediyor ve kişiselleştirilmiş bir yol haritası çıkarıyoruz.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Bu pakette neler var?</h4>
              
              <div className="grid gap-3">
                {[
                  {
                    title: "1'e 1 Canlı Görüşme",
                    desc: "Sana özel yol haritası çıkarıyoruz, hedeflerini ve durumunu değerlendiriyoruz"
                  },
                  {
                    title: "Okul Listesi Oluşturma",
                    desc: "Bütçene, notlarına ve hedeflerine göre reach, match ve safety okulları beraber belirliyoruz"
                  },
                  {
                    title: "Türk Vatandaşlarına Özel Burslar",
                    desc: "Sadece Türk öğrencilerin başvurabileceği özel burs fırsatları hakkında bilgi veriyoruz"
                  },
                  {
                    title: "Essay Nasıl Yazılır?",
                    desc: "Okullar için çok önemli olan essay'in nasıl yazılacağını anlatıyoruz"
                  },
                  {
                    title: "Essay İnceleme (1 adet)",
                    desc: "İkinci seansta essay'ini beraber inceliyoruz ve geri bildirim veriyoruz"
                  },
                  {
                    title: "Amerikan Usulü CV/Resume",
                    desc: "Öğrenciye özel, Amerikan standartlarına uygun CV hazırlıyoruz"
                  },
                  {
                    title: "VIP WhatsApp Grubu",
                    desc: "Bu süreçte sorularını sorabileceğin özel bir WhatsApp grubuna alıyoruz"
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">{item.title}</span>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (packageType === "full") {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display flex items-center gap-3">
              <Award className="w-6 h-6 text-secondary" />
              10 Aylık Danışmanlık + Koçluk
              <span className="text-xs bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full font-medium">
                Sınırlı Kontenjan: 20 Kişi
              </span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <p className="text-muted-foreground">
              10 ay boyunca hem danışmanlık hem koçluk yaparak öğrenciyi inanılmaz şekilde hazırlıyoruz. 
              Bu paket ile garanti kabul alacağın okullar ve tam burs fırsatları için çalışıyoruz.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
              <p className="text-sm font-semibold text-destructive">
                ⚠️ Sınırlı Kontenjan: Sadece 20 öğrenci alınmaktadır
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Bu pakette neler var?</h4>
              
              <div className="grid gap-3">
                {[
                  {
                    title: "10 Ay Boyunca Danışmanlık + Koçluk",
                    desc: "Öğrenciyi hem akademik hem kişisel gelişim açısından takip ediyoruz"
                  },
                  {
                    title: "Özel Burslar",
                    desc: "Türk öğrencilere özel olan burslar ve tam burs fırsatlarına başvuruyoruz"
                  },
                  {
                    title: "Amerikan Okulları Bursları",
                    desc: "Sonrası için Amerikan üniversitelerinin sunduğu özel burs programları"
                  },
                  {
                    title: "Garanti Kabul Okulları",
                    desc: "Profiline uygun, kabul garantili safety okulları belirleyip başvuruyoruz"
                  },
                  {
                    title: "Ücretsiz Başvuru (20 Okul)",
                    desc: "Her okulun başvurusu $80. Biz 20 okula başvurturup normalde $1,600 ödeyeceğin yeri ücretsiz yapıyoruz"
                  },
                  {
                    title: "Essay Yazımı",
                    desc: "Tüm okullar için essay'leri sıfırdan beraber yazıyoruz"
                  },
                  {
                    title: "Referans Mektubu Hazırlığı",
                    desc: "Öğretmenlerinle iletişime geçip güçlü referans mektupları hazırlıyoruz"
                  },
                  {
                    title: "Amerikan Usulü CV/Portfolio/Resume",
                    desc: "Öğrenciye özel, profesyonel Amerikan standartlarına uygun dosya hazırlıyoruz"
                  },
                  {
                    title: "Düzenli Zoom ve Canlı Aramalar",
                    desc: "Her zaman erişilebilir - düzenli takip görüşmeleri ve anında destek"
                  },
                  {
                    title: "VIP WhatsApp Grubu",
                    desc: "Tüm süreç boyunca sorularını sorabileceğin özel destek grubu"
                  },
                  {
                    title: "Ve Daha Fazlası...",
                    desc: "Mock interview, vize hazırlığı, konaklama danışmanlığı ve daha birçok ekstra destek"
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">{item.title}</span>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return null;
};

export default PackageDetailsDialog;
