import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const DonateButton = () => {
  return (
    <Link
      to="/doacoes"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-white shadow-strong transition-smooth hover:scale-110 hover:shadow-strong animate-custom-bounce"
      aria-label="Fazer uma doação"
    >
      <Heart className="h-7 w-7 fill-current" />
    </Link>
  );
};

export default DonateButton;
