import { useEffect, useState } from "react";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DonationAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenAlert = sessionStorage.getItem("donation-alert-seen");
    
    if (!hasSeenAlert) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("donation-alert-seen", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative mx-4 max-w-xl rounded-2xl bg-card p-8 shadow-strong animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-smooth hover:bg-muted hover:text-foreground"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent">
            <Heart className="h-8 w-8 fill-white text-white" />
          </div>
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            Seja Parte dessa Transformação!
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Cada doação transforma vidas. Juntos, podemos oferecer educação, esporte e oportunidades 
            para crianças e adolescentes que mais precisam. <strong>Sua contribuição faz a diferença!</strong>
          </p>
        </div>

        <div className="flex flex-col gap-3 min-h-12 md:flex-row">
          <Button asChild variant="warm" size="lg" className="flex-1 py-3 hover-scale">
            <Link to="/doacoes" onClick={handleClose}>
              <Heart className="mr-2 h-5 w-5" />
              Fazer uma Doação
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleClose}
            className="flex-1 py-3"
          >
            Conhecer os Projetos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonationAlert;
