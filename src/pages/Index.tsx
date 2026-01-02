import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import TipsSection from "@/components/TipsSection";
import QuizSection from "@/components/QuizSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingBookingButton from "@/components/FloatingBookingButton";

const Index = () => {
  const quizRef = useRef<HTMLElement>(null);

  const scrollToQuiz = () => {
    quizRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onStartQuiz={scrollToQuiz} />
      <TipsSection />
      <QuizSection quizRef={quizRef} />
      <TestimonialsSection />
      <Footer />
      <FloatingBookingButton onClick={scrollToQuiz} />
    </main>
  );
};

export default Index;
