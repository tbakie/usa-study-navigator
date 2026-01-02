import { Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center text-cream hover:bg-card/20 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center text-cream hover:bg-card/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-cream/60 text-sm mb-4">
            Helping students achieve their American dream, one application at a time.
          </p>

          <p className="text-cream/40 text-xs flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-secondary fill-secondary" /> for future scholars
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
