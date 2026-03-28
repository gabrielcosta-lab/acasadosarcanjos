import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChartNoAxesGantt, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import fullLogo from "@/assets/full-logo.png";
import { scroller } from "react-scroll";
import { useEffect } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDonateClick = () => {
    const wasOpen = isOpen;
    setIsOpen(false);
    
    if (location.pathname === "/") {
      const scrollToDonate = () => {
        scroller.scrollTo("doacoes", {
          smooth: true,
          duration: 500,
          offset: -100,
        });
      };

      if (wasOpen) {
        setTimeout(scrollToDonate, 350);
      } else {
        scrollToDonate();
      }
    } else {
      navigate("/", { state: { scrollTo: "doacoes" } });
    }
  };

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo === "doacoes") {
      setTimeout(() => {
        scroller.scrollTo("doacoes", {
          smooth: true,
          duration: 500,
          offset: -100,
        });
        // Clear the state to prevent scrolling on subsequent renders/refreshes if desired
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location, navigate]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    const wasOpen = isOpen;
    setIsOpen(false);
    
    if (to === "/" && location.pathname === "/") {
      e.preventDefault();
      const scrollToHero = () => {
        scroller.scrollTo("hero", {
          smooth: true,
          duration: 500,
          offset: 0,
        });
      };

      if (wasOpen) {
        setTimeout(scrollToHero, 350);
      } else {
        scrollToHero();
      }
    }
  };

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/quem-somos", label: "Quem Somos" },
    { to: "/projetos", label: "Projetos" },
    { to: "/doacoes", label: "Doações" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-smooth hover:opacity-80"
          >
            <img
              src={fullLogo}
              alt="A Casa dos Arcanjos"
              className="h-14 object-fill"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleLinkClick(e, link.to)}
                className={cn(
                  "text-sm font-medium transition-smooth hover:text-primary",
                  location.pathname === link.to
                    ? "text-primary font-bold"
                    : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" onClick={handleDonateClick}>
              Doar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-8 w-8 stroke-[1.5px] text-foreground" />
            ) : (
              <ChartNoAxesGantt className="h-8 w-8 stroke-[1.5px] text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleLinkClick(e, link.to)}
                className={cn(
                  "text-sm font-medium transition-smooth hover:text-primary",
                  location.pathname === link.to
                    ? "text-primary font-bold"
                    : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" className="w-full" onClick={handleDonateClick}>
              Doar Agora
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
