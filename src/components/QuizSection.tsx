import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, ArrowLeft, Calendar, User, GraduationCap, Languages, CheckCircle } from "lucide-react";

interface QuizSectionProps {
  quizRef: React.RefObject<HTMLElement>;
}

type QuizStep = "role" | "education" | "english" | "booking";

interface QuizAnswers {
  role: string;
  education: string;
  english: string;
}

const QuizSection = ({ quizRef }: QuizSectionProps) => {
  const [currentStep, setCurrentStep] = useState<QuizStep>("role");
  const [answers, setAnswers] = useState<QuizAnswers>({
    role: "",
    education: "",
    english: "",
  });

  const steps: QuizStep[] = ["role", "education", "english", "booking"];
  const currentIndex = steps.indexOf(currentStep);
  const progress = ((currentIndex + 1) / steps.length) * 100;

  const handleSelect = (key: keyof QuizAnswers, value: string) => {
    setAnswers({ ...answers, [key]: value });
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
      case "english":
        return answers.english !== "";
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
      case "beginner": return "Başlangıç";
      case "intermediate": return "Orta";
      case "advanced": return "İleri";
      case "native": return "Anadil";
      default: return english;
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
                    { value: "beginner", label: "Başlangıç", desc: "Yeni başlıyorum" },
                    { value: "intermediate", label: "Orta Seviye", desc: "İyi iletişim kurabiliyorum" },
                    { value: "advanced", label: "İleri Seviye", desc: "Çoğu durumda akıcı" },
                    { value: "native", label: "Anadil / Anadil Seviyesi", desc: "Tamamen akıcı" },
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={answers.english === option.value ? "quizSelected" : "quiz"}
                      className="h-auto py-4 px-6 justify-start text-left"
                      onClick={() => handleSelect("english", option.value)}
                    >
                      <div>
                        <div className="font-semibold">{option.label}</div>
                        <div className="text-sm text-muted-foreground">{option.desc}</div>
                      </div>
                      {answers.english === option.value && (
                        <CheckCircle className="w-5 h-5 text-secondary ml-auto" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === "booking" && (
              <div className="animate-fade-up text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-secondary" />
                </div>
                
                <h3 className="font-display text-2xl text-foreground mb-4">
                  Harika! Hadi Konuşalım
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Cevaplarına göre sana özel rehberlik sunabilirim. 
                  Başlamak için ücretsiz görüşme randevusu al.
                </p>

                <div className="bg-muted/50 rounded-xl p-4 mb-8 text-left">
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
                      <span className="text-muted-foreground">İngilizce:</span>
                      <span className="font-medium">{getEnglishLabel(answers.english)}</span>
                    </div>
                  </div>
                </div>

                <Button variant="gold" size="xl" className="w-full mb-4">
                  <Calendar className="w-5 h-5" />
                  Ücretsiz Görüşme Randevusu Al
                </Button>

                <Button
                  variant="ghost"
                  onClick={goBack}
                  className="text-muted-foreground"
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
