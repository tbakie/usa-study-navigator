import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowRight, ArrowLeft, Calendar, User, GraduationCap, Languages, CheckCircle, DollarSign, Target } from "lucide-react";

interface QuizSectionProps {
  quizRef: React.RefObject<HTMLElement>;
}

type QuizStep = "role" | "education" | "schoolInfo" | "english" | "motivation" | "scholarshipFactors" | "budget" | "booking";

interface QuizAnswers {
  role: string;
  education: string;
  schoolName: string;
  grade: string;
  english: string;
  motivation: string;
  scholarshipFactors: string;
  budget: string;
}

const QuizSection = ({ quizRef }: QuizSectionProps) => {
  const [currentStep, setCurrentStep] = useState<QuizStep>("role");
  const [answers, setAnswers] = useState<QuizAnswers>({
    role: "",
    education: "",
    schoolName: "",
    grade: "",
    english: "",
    motivation: "",
    scholarshipFactors: "",
    budget: "",
  });

  const steps: QuizStep[] = ["role", "education", "schoolInfo", "english", "motivation", "scholarshipFactors", "budget", "booking"];
  const currentIndex = steps.indexOf(currentStep);
  const progress = ((currentIndex + 1) / steps.length) * 100;

  const handleSelect = (key: keyof QuizAnswers, value: string) => {
    setAnswers({ ...answers, [key]: value });
  };

  const handleInputChange = (key: keyof QuizAnswers, value: string) => {
    setAnswers({ ...answers, [key]: value });
  };

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const goNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex]);
    }
  };

  const goBack = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex]);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case "role":
        return answers.role !== "";
      case "education":
        return answers.education !== "";
      case "schoolInfo":
        return answers.schoolName !== "" && answers.grade !== "";
      case "english":
        return answers.english !== "";
      case "motivation":
        return countWords(answers.motivation) <= 75;
      case "scholarshipFactors":
        return true;
      case "budget":
        return answers.budget !== "";
      case "booking":
        return true;
      default:
        return false;
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "student": return "Öğrenci";
      case "parent": return "Veli";
      default: return role;
    }
  };

  const getEducationLabel = (education: string) => {
    switch (education) {
      case "highschool": return "Lise";
      case "undergraduate": return "Lisans";
      case "graduate": return "Yüksek Lisans";
      case "professional": return "Çalışan";
      default: return education;
    }
  };

  const getEnglishLabel = (english: string) => {
    switch (english) {
      case "a1": return "A1 - Başlangıç";
      case "a2": return "A2 - Temel";
      case "b1": return "B1 - Orta Altı";
      case "b2": return "B2 - Orta";
      case "c1": return "C1 - İleri";
      case "c2": return "C2 - Anadil Seviyesi";
      default: return english;
    }
  };

  const getBudgetLabel = (budget: string) => {
    switch (budget) {
      case "0-5k": return "$0 - $5,000";
      case "5k-15k": return "$5,000 - $15,000";
      case "15k-30k": return "$15,000 - $30,000";
      case "30k+": return "$30,000+";
      case "unsure": return "Emin Değilim";
      default: return budget;
    }
  };


  return (
    <section ref={quizRef} className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-cream/60 text-sm mb-2">
              <span>Adım {currentIndex + 1} / {steps.length}</span>
              <span>%{Math.round(progress)} tamamlandı</span>
            </div>
            <div className="h-2 bg-card/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gold-gradient transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Quiz card */}
          <div className="bg-card rounded-3xl p-8 shadow-lifted animate-scale-in">
            {currentStep === "role" && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Siz kimsiniz?</h3>
                </div>
                
                <div className="grid gap-4">
                  {[
                    { value: "student", label: "Öğrenciyim", desc: "Amerika'da okumak istiyorum" },
                    { value: "parent", label: "Veliyim", desc: "Çocuğumun başvurusuna yardım ediyorum" },
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={answers.role === option.value ? "quizSelected" : "quiz"}
                      className="h-auto py-4 px-6 justify-start text-left"
                      onClick={() => handleSelect("role", option.value)}
                    >
                      <div>
                        <div className="font-semibold">{option.label}</div>
                        <div className="text-sm text-muted-foreground">{option.desc}</div>
                      </div>
                      {answers.role === option.value && (
                        <CheckCircle className="w-5 h-5 text-secondary ml-auto" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === "education" && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Eğitim Seviyeniz</h3>
                </div>
                
                <div className="grid gap-3">
                  {[
                    { value: "highschool", label: "Lise Öğrencisi" },
                    { value: "undergraduate", label: "Lisans Öğrencisi" },
                    { value: "graduate", label: "Yüksek Lisans / Doktora" },
                    { value: "professional", label: "Çalışan Profesyonel" },
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={answers.education === option.value ? "quizSelected" : "quiz"}
                      className="h-auto py-4 px-6 justify-between"
                      onClick={() => handleSelect("education", option.value)}
                    >
                      {option.label}
                      {answers.education === option.value && (
                        <CheckCircle className="w-5 h-5 text-secondary" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === "schoolInfo" && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Okul Bilgilerin</h3>
                </div>
                
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Okul Adı
                    </label>
                    <Input
                      placeholder="Okulunuzun adını yazın"
                      value={answers.schoolName}
                      onChange={(e) => handleInputChange("schoolName", e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Not Ortalamanız (OBP/GPA)
                    </label>
                    <Input
                      placeholder="Örn: 85.50 veya 3.5"
                      value={answers.grade}
                      onChange={(e) => handleInputChange("grade", e.target.value)}
                      className="bg-background border-border"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Lise için OBP, üniversite için GPA yazabilirsiniz
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === "english" && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Languages className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">İngilizce Seviyeniz</h3>
                </div>
                
                <div className="grid gap-3">
                  {[
                    { value: "a1", label: "Başlangıç", level: "A1", desc: "Temel kelimeler ve kalıplar" },
                    { value: "a2", label: "Temel", level: "A2", desc: "Basit cümleler kurabiliyorum" },
                    { value: "b1", label: "Orta Altı", level: "B1", desc: "Günlük konuşmaları anlayabiliyorum" },
                    { value: "b2", label: "Orta", level: "B2", desc: "Akıcı iletişim kurabiliyorum" },
                    { value: "c1", label: "İleri", level: "C1", desc: "Karmaşık konularda rahat konuşabiliyorum" },
                    { value: "c2", label: "Anadil Seviyesi", level: "C2", desc: "Tamamen akıcı" },
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={answers.english === option.value ? "quizSelected" : "quiz"}
                      className="h-auto py-4 px-6 justify-start text-left"
                      onClick={() => handleSelect("english", option.value)}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <span className="bg-secondary/20 text-secondary text-xs font-bold px-2 py-1 rounded">
                          {option.level}
                        </span>
                        <div>
                          <div className="font-semibold">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.desc}</div>
                        </div>
                      </div>
                      {answers.english === option.value && (
                        <CheckCircle className="w-5 h-5 text-secondary ml-auto" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === "motivation" && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Hedefin ve Motivasyonun</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      ABD'de üniversite hedefin ne kadar ciddi ve neden burada okumak istiyorsun?
                    </label>
                    <Textarea
                      placeholder="Hedeflerini ve motivasyonunu buraya yaz..."
                      value={answers.motivation}
                      onChange={(e) => handleInputChange("motivation", e.target.value)}
                      className="bg-background border-border min-h-[120px]"
                    />
                    <div className="flex justify-between mt-2">
                      <p className="text-xs text-muted-foreground">
                        Maksimum 75 kelime
                      </p>
                      <p className={`text-xs ${countWords(answers.motivation) > 75 ? 'text-destructive' : 'text-muted-foreground'}`}>
                        {countWords(answers.motivation)} / 75 kelime
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === "scholarshipFactors" && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Burs Faktörleri</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Sana burs verebilecek ne faktörler var? (Akademik başarı, proje, profesyonel spor, sanat vb.)
                    </label>
                    <Textarea
                      placeholder="Örn: Yüksek GPA, TÜBİTAK projesi, milli takım sporcusu..."
                      value={answers.scholarshipFactors}
                      onChange={(e) => handleInputChange("scholarshipFactors", e.target.value)}
                      className="bg-background border-border min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Opsiyonel - Burs için güçlü yönlerini yaz
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === "budget" && (
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">Aile Bütçesi</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Burs olmadığı durumda aileniz yıllık yaklaşık ne kadar bütçe ayırabilir? (Dolar bazında)
                </p>
                
                <div className="grid gap-3">
                  {[
                    { value: "0-5k", label: "$0 - $5,000", desc: "Yıllık 5.000 dolara kadar" },
                    { value: "5k-15k", label: "$5,000 - $15,000", desc: "Yıllık 5.000 - 15.000 dolar arası" },
                    { value: "15k-30k", label: "$15,000 - $30,000", desc: "Yıllık 15.000 - 30.000 dolar arası" },
                    { value: "30k+", label: "$30,000+", desc: "Yıllık 30.000 dolardan fazla" },
                    { value: "unsure", label: "Emin Değilim", desc: "Henüz net bir bütçe belirlemedik" },
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={answers.budget === option.value ? "quizSelected" : "quiz"}
                      className="h-auto py-4 px-6 justify-start text-left"
                      onClick={() => handleSelect("budget", option.value)}
                    >
                      <div>
                        <div className="font-semibold">{option.label}</div>
                        <div className="text-sm text-muted-foreground">{option.desc}</div>
                      </div>
                      {answers.budget === option.value && (
                        <CheckCircle className="w-5 h-5 text-secondary ml-auto" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === "booking" && (
              <div className="animate-fade-up">
                {/* Budget-based result content */}
                {answers.budget === "0-5k" && (
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-4">
                      Yüksek Burs Stratejisi Gerekli
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Bu bütçeyle ABD planı yüksek burs stratejisiyle mümkün olabilir.
                      İlk adım olarak aşağıdaki içeriklerle süreci netleştir.
                    </p>
                    <div className="bg-muted/50 rounded-xl p-6 text-left space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <div className="font-semibold">$25 E-Kitap</div>
                          <div className="text-sm text-muted-foreground">ABD'de okumak için kapsamlı rehber</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <div className="font-semibold">$120 Birebir Danışmanlık + VIP WhatsApp Grubu</div>
                          <div className="text-sm text-muted-foreground">Kişiselleştirilmiş rehberlik ve topluluk desteği</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {(answers.budget === "5k-15k" || answers.budget === "unsure") && (
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                      <Calendar className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-4">
                      Değerlendirme Görüşmesi
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Uygunluk durumunda aileyle değerlendirme görüşmesi yapılabilir.
                    </p>
                    <div className="bg-muted/50 rounded-xl p-6 text-left space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <div className="font-semibold">$25 E-Kitap</div>
                          <div className="text-sm text-muted-foreground">ABD'de okumak için kapsamlı rehber</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <div className="font-semibold">$120 Birebir Danışmanlık + VIP WhatsApp Grubu</div>
                          <div className="text-sm text-muted-foreground">Kişiselleştirilmiş rehberlik ve topluluk desteği</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <div className="font-semibold">Aile ile Birebir Toplantı</div>
                          <div className="text-sm text-muted-foreground">Detaylı planlama ve strateji görüşmesi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {answers.budget === "15k-30k" && (
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                      <GraduationCap className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-4">
                      Aile Bazlı Planlama
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Bu bütçe aralığında aile bazlı bir planlama mümkündür.
                      Uygunluk durumunu netleştirmek için görüşme alabilirsin.
                    </p>
                    <div className="bg-muted/50 rounded-xl p-6 text-left space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                        <div className="flex-1">
                          <div className="font-semibold text-secondary">10 Aylık Birebir Danışmanlık-Koçluk</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Tüm süreci beraber yönettiğimiz, özel burslara başvurduğumuz, 
                            Amerika'nın en iyi okullarına kabul için en güçlü başvuru biçimi
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <div className="font-semibold">$120 Birebir Danışmanlık + VIP WhatsApp Grubu</div>
                          <div className="text-sm text-muted-foreground">Kişiselleştirilmiş rehberlik ve topluluk desteği</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {answers.budget === "30k+" && (
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                      <GraduationCap className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-4">
                      Premium Program
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      En kapsamlı danışmanlık programımız için uygunsunuz.
                    </p>
                    <div className="bg-muted/50 rounded-xl p-6 text-left space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-secondary">10 Aylık Birebir Danışmanlık-Koçluk</span>
                            <span className="text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded-full font-medium">
                              Sınırlı Kontenjan
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Tüm süreci beraber yönettiğimiz, özel burslara başvurduğumuz, 
                            Amerika'nın en iyi okullarına kabul için en güçlü başvuru biçimi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-muted/30 rounded-xl p-4 mb-6 text-left">
                  <div className="text-sm text-muted-foreground mb-2">Profilin:</div>
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rol:</span>
                      <span className="font-medium">{getRoleLabel(answers.role)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Eğitim:</span>
                      <span className="font-medium">{getEducationLabel(answers.education)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Okul:</span>
                      <span className="font-medium">{answers.schoolName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Not:</span>
                      <span className="font-medium">{answers.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">İngilizce:</span>
                      <span className="font-medium">{getEnglishLabel(answers.english)}</span>
                    </div>
                    {answers.scholarshipFactors && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Burs Faktörleri:</span>
                        <span className="font-medium text-right max-w-[60%]">{answers.scholarshipFactors}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bütçe:</span>
                      <span className="font-medium">{getBudgetLabel(answers.budget)}</span>
                    </div>
                  </div>
                </div>

                <Button variant="gold" size="xl" className="w-full mb-4">
                  <Calendar className="w-5 h-5" />
                  Görüşme Randevusu Al
                </Button>

                <Button
                  variant="ghost"
                  onClick={goBack}
                  className="w-full text-muted-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Geri Dön
                </Button>
              </div>
            )}

            {/* Navigation */}
            {currentStep !== "booking" && (
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={goBack}
                  disabled={currentIndex === 0}
                  className="text-muted-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Geri
                </Button>
                
                <Button
                  variant="gold"
                  onClick={goNext}
                  disabled={!canProceed()}
                >
                  Devam Et
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
