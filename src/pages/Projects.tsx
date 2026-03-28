import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Heart,
  TrendingUp,
  Shield,
  Star,
  Sparkles,
  Award,
  Trophy,
  Smile,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import bjjImage from "@/assets/bjj-project.jpg";
import bjjTrainingImage from "@/assets/bjj-training.jpg";
import asmaraImage from "@/assets/projeto-asmara-foto1.jpg";
import asmaraWorkshopImage from "@/assets/projeto-asmara-foto2.jpg";

const Projects = () => {
  const bjjRef = useScrollAnimation();
  const asmaraRef = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">Nossos Projetos</h1>
            <p className="text-xl text-white/90">
              Conheça as iniciativas que estão transformando vidas através do
              esporte e do empreendedorismo
            </p>
          </div>
        </div>
      </section>

      {/* Arcanjos BJJ */}
      {/* <section id="arcanjos-bjj" className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            ref={bjjRef.ref}
            className={`transition-all duration-700 ${
              bjjRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-foreground">Projeto Arcanjos BJJ</h2>
              <p className="text-xl text-muted-foreground">
                Formando cidadãos através do Jiu-Jitsu
              </p>
            </div>

            <div className="mb-12 grid lg:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl shadow-medium">
                <img
                  src={bjjImage}
                  alt="Projeto Arcanjos BJJ"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-medium">
                <img
                  src={bjjTrainingImage}
                  alt="Treinamento de Jiu-Jitsu"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            <div className="mb-12 space-y-6 text-lg text-muted-foreground">
              <p>
                O <strong>Projeto Arcanjos BJJ</strong> atende crianças e
                adolescentes em situação de vulnerabilidade social, oferecendo
                muito mais do que aulas de Jiu-Jitsu. Nosso objetivo é formar
                cidadãos conscientes, desenvolvendo habilidades motoras,
                intelectuais e sociais fundamentais para a vida.
              </p>
              <p>
                Através da prática esportiva, trabalhamos o protagonismo na
                resolução de conflitos, a convivência social saudável, o combate
                ao preconceito e ao bullying, além de fortalecer a autoconfiança
                e ensinar técnicas de defesa pessoal.
              </p>
              <p>
                Cada treino é uma oportunidade de crescimento, disciplina e
                superação. Nossos alunos aprendem valores como respeito,
                perseverança e trabalho em equipe, que carregarão para toda a
                vida.
              </p>
              <p>
                Oferecemos aulas regulares, acompanhamento individualizado e
                participação em campeonatos regionais, sempre priorizando o
                desenvolvimento integral de cada criança e adolescente. Mais que
                um esporte, o BJJ é uma ferramenta de transformação social.
              </p>
            </div>

            <div className="mb-12 grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 shadow-soft">
                <CardContent className="pt-6">
                  <Trophy className="mb-3 h-10 w-10 text-primary" />
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    Resultados Concretos
                  </h3>
                  <p className="text-muted-foreground">
                    Mais de 200 crianças atendidas, com melhoria comprovada no
                    desempenho escolar, redução de comportamento agressivo e
                    aumento da autoestima.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-soft">
                <CardContent className="pt-6">
                  <Smile className="mb-3 h-10 w-10 text-primary" />
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    Impacto Social
                  </h3>
                  <p className="text-muted-foreground">
                    Fortalecimento de vínculos familiares, redução da evasão
                    escolar e formação de jovens líderes em suas comunidades.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-primary/20 shadow-soft hover-scale">
                <CardContent className="pt-6 text-center">
                  <Users className="mx-auto mb-3 h-10 w-10 text-primary" />
                  <h4 className="mb-2 text-xl font-semibold text-foreground">
                    Desenvolvimento Social
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Convivência, respeito e trabalho em equipe
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-soft hover-scale">
                <CardContent className="pt-6 text-center">
                  <Target className="mx-auto mb-3 h-10 w-10 text-primary" />
                  <h4 className="mb-2 text-xl font-semibold text-foreground">
                    Habilidades Motoras
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Coordenação, equilíbrio e condicionamento físico
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-soft hover-scale">
                <CardContent className="pt-6 text-center">
                  <Shield className="mx-auto mb-3 h-10 w-10 text-primary" />
                  <h4 className="mb-2 text-xl font-semibold text-foreground">
                    Defesa Pessoal
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Técnicas de proteção e autoconfiança
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-soft hover-scale">
                <CardContent className="pt-6 text-center">
                  <Star className="mx-auto mb-3 h-10 w-10 text-primary" />
                  <h4 className="mb-2 text-xl font-semibold text-foreground">
                    Formação Cidadã
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Protagonismo e resolução de conflitos
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* Asmara */}
      <section id="asmara" className="gradient-light py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            ref={asmaraRef.ref}
            className={`transition-all duration-700 ${
              asmaraRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-foreground">Programa Asmara</h2>
              <p className="text-xl text-muted-foreground">
                Empoderando mulheres através do empreendedorismo
              </p>
            </div>

            <div className="mb-12 grid lg:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl shadow-medium">
                <img
                  src={asmaraImage}
                  alt="Programa Asmara"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-medium">
                <img
                  src={asmaraWorkshopImage}
                  alt="Workshop Programa Asmara"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            <div className="mb-12 space-y-6 text-lg text-muted-foreground">
              <p>
                O <strong>Programa Asmara</strong> fortalece o impacto social e
                econômico de mulheres em territórios vulneráveis. Em parceria
                com o Instituto Gerando Falcões, oferecemos acesso a
                microfranquias, formação técnica e desenvolvimento humano —
                promovendo autonomia financeira e empreendedorismo.
              </p>
              <p>
                Desde outubro de 2024, o programa vem transformando vidas de
                mulheres em Barueri e região. As participantes têm acesso a
                capacitação profissional, mentoria empresarial e suporte
                completo para iniciar e desenvolver seus próprios negócios.
              </p>
              <p>
                Mais do que gerar renda, o Asmara transforma realidades,
                fortalece a autoestima e cria lideranças femininas capazes de
                inspirar e transformar suas comunidades. Cada mulher atendida é
                uma história de superação, coragem e protagonismo.
              </p>
              <p>
                O programa oferece não apenas ferramentas de negócio, mas também
                desenvolvimento de soft skills, educação financeira, marketing
                digital e gestão empresarial. Acompanhamos cada empreendedora em
                sua jornada, da concepção do negócio ao crescimento sustentável.
              </p>
            </div>

            <div className="mb-12 grid md:grid-cols-2 gap-6">
              <Card className="border-secondary/20 shadow-soft">
                <CardContent className="pt-6">
                  <TrendingUp className="mb-3 h-10 w-10 text-secondary" />
                  <h4 className="mb-3 text-xl font-bold text-foreground">
                    Crescimento Econômico
                  </h4>
                  <p className="text-muted-foreground">
                    Aumento médio de 150% na renda familiar das participantes
                    nos primeiros 6 meses, gerando autonomia e independência
                    financeira.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 shadow-soft">
                <CardContent className="pt-6">
                  <Users className="mb-3 h-10 w-10 text-secondary" />
                  <h4 className="mb-3 text-xl font-bold text-foreground">
                    Rede de Apoio
                  </h4>
                  <p className="text-muted-foreground">
                    Criação de uma comunidade de mulheres empreendedoras que se
                    apoiam mutuamente, compartilham experiências e crescem
                    juntas.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-secondary/20 shadow-soft">
                <CardContent className="pt-6 text-center">
                  <Sparkles className="mx-auto mb-3 h-10 w-10 text-secondary" />
                  <h4 className="mb-2 text-xl font-semibold text-foreground">
                    Microfranquias
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Acesso a modelos de negócio validados
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 shadow-soft">
                <CardContent className="pt-6 text-center">
                  <Award className="mx-auto mb-3 h-10 w-10 text-secondary" />
                  <h4 className="mb-2 text-xl font-semibold text-foreground">
                    Formação Técnica
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Capacitação profissional e empresarial
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 shadow-soft">
                <CardContent className="pt-6 text-center">
                  <Heart className="mx-auto mb-3 h-10 w-10 text-secondary" />
                  <h4 className="mb-2 text-xl font-semibold text-foreground">
                    Desenvolvimento Humano
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Autoestima, liderança e protagonismo
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 shadow-soft">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="mx-auto mb-3 h-10 w-10 text-secondary" />
                  <h4 className="mb-2 text-xl font-semibold text-foreground">
                    Autonomia Financeira
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Geração de renda e independência
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <Card className="gradient-hero border-none shadow-strong">
            <CardContent className="p-8 text-center lg:p-12">
              <h2 className="mb-4 text-white">Apoie Nossos Projetos</h2>
              <p className="mb-8 text-xl text-white/90">
                Sua doação transforma vidas e constrói futuros. Faça parte desta
                história!
              </p>
              <Button asChild variant="warm" size="lg">
                <Link to="/doacoes">
                  Fazer uma Doação
                  <Heart className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Projects;
