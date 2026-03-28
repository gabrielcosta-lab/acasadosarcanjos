import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import fullLogo from "@/assets/full-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={fullLogo} alt="A Casa dos Arcanjos" className="h-14 object-fill"/>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando vidas através do esporte, educação e empreendedorismo.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/quem-somos"
                  className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/projetos"
                  className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Projetos */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Nossos Projetos
            </h3>
            <ul className="space-y-2">
              {/* <li className="text-sm text-muted-foreground">Arcanjos BJJ</li> */}
              <li className="text-sm text-muted-foreground">Programa Asmara</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:contato@casadosarcanjos.org"
                  className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                >
                  alineoliveiranunes1992@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+5511968225500"
                  className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                >
                  (11) 96822-5500
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-primary" />
                <a
                  href="https://instagram.com/acasadosarcanjos.cda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                >
                  @acasadosarcanjos.cda
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} A Casa dos Arcanjos. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              CNPJ: 21.919.893/0001-43
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
