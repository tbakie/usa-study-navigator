import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TipsSection from "@/components/TipsSection";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";

const Index = () => {
  const quizRef = useRef<HTMLElement>(null);

  const scrollToQuiz = () => {
    quizRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onStartQuiz={scrollToQuiz} />
      <TestimonialsSection />
      <TipsSection />
      <QuizSection quizRef={quizRef} />
      <Footer />
    </main>
  );
};

export default Index;
