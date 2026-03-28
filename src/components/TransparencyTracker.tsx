import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TransparencyTracker = () => {
  const sectionRef = useScrollAnimation();
  const steps = [
    {
      number: 1,
      title: "Doação Recebida",
      description: "Sua contribuição chega na conta da ONG via Pix ou transferência bancária",
      icon: "💰"
    },
    {
      number: 2,
      title: "Registro e Prestação de Contas",
      description: "Todo valor é registrado em nosso sistema de gestão financeira com total transparência",
      icon: "📋"
    },
    {
      number: 3,
      title: "Planejamento e Alocação",
      description: "Os recursos são distribuídos entre os projetos de acordo com as necessidades prioritárias",
      icon: "📊"
    },
    {
      number: 4,
      title: "Compra de Materiais e Recursos",
      description: "Aquisição de equipamentos, materiais didáticos, uniformes e infraestrutura necessária",
      icon: "🛒"
    },
    {
      number: 5,
      title: "Execução dos Projetos",
      description: "Realização das atividades com as crianças, adolescentes e mulheres atendidas",
      icon: "🎯"
    },
    {
      number: 6,
      title: "Vidas Transformadas",
      description: "Impacto real na vida dos beneficiários: educação, esporte, desenvolvimento e oportunidades",
      icon: "✨"
    }
  ];

  return (
    <section className="gradient-light relative overflow-hidden py-16 lg:py-24 style-grid">
      <div className="circle-accent c-1"></div>
      <div className="circle-accent c-2"></div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="">
          <div 
            ref={sectionRef.ref}
            className={`mb-16 text-center transition-all duration-700 ${
              sectionRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-4 text-foreground">Confiança é Transparência</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Veja o caminho completo da sua doação até o impacto real na vida de crianças e adolescentes
            </p>
          </div>

          <div className={`grid lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${
            sectionRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {steps.slice(0, 3).map((step, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-2xl shadow-medium">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold text-primary">Etapa {step.number}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`grid lg:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${
            sectionRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {steps.slice(3).map((step, index) => (
              <Card key={index + 3} className="shadow-soft hover:shadow-medium transition-smooth hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-2xl shadow-medium">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold text-primary">Etapa {step.number}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className={`mt-12 transition-all duration-700 delay-400 ${
            sectionRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-8 text-center">
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  Vagas Disponíveis
                </h3>
                <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
                  Confira oportunidades de trabalho, entrando em contato através do botão abaixo.
                </p>
                <Button variant="outline" size="lg" className="hover-scale">
                  Ver Vagas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencyTracker;
