import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

interface FloatingBookingButtonProps {
  onClick: () => void;
}

const FloatingBookingButton = ({ onClick }: FloatingBookingButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        variant="gold" 
        size="lg" 
        onClick={onClick}
        className="shadow-gold animate-float rounded-full px-6"
      >
        <Calendar className="w-5 h-5" />
        <span>Randevu Al</span>
      </Button>
    </div>
  );
};

export default FloatingBookingButton;
