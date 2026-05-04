import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Target,
  Award,
  ArrowRight,
  GraduationCap,
  TrendingUp,
  Calendar,
} from "lucide-react";
import bjjImage from "@/assets/bjj-project.jpg";
import asmaraImage from "@/assets/projeto-asmara-foto1.jpg";
import heroImage from "@/assets/hero-children.jpg";
import QuickDonation from "@/components/QuickDonation";
import FAQ from "@/components/FAQ";
import TransparencyTracker from "@/components/TransparencyTracker";
import InstagramFeed from "@/components/InstagramFeed";
import Testimonials from "@/components/Testimonials";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Home = () => {
  const missionRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] md:h-[90vh]" id="hero">
        <section className="gradient-hero relative overflow-hidden h-full py-20 lg:py-32">
          <div className="container mx-auto px-4 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="mb-6 text-white">
                  Transforme Vidas. Doe Esperança.
                </h1>
                <p className="mb-8 text-xl text-white/90 leading-relaxed">
                  <strong>Juntos, podemos mudar o futuro!</strong> A Casa dos
                  Arcanjos transforma vidas através do esporte, educação e
                  empreendedorismo.{" "}
                  <strong>
                    Cada real doado constrói esperança e abre portas.
                  </strong>
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    variant="warm"
                    size="lg"
                    className="hover-scale"
                  >
                    <Link to="/doacoes">
                      Doar Agora via Pix
                      <Heart className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white bg-white/10 text-white hover:bg-white hover:text-primary hover-scale"
                  >
                    <Link to="/projetos">
                      Conheça os Projetos
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative w-fit h-fit">
                <img
                  src={heroImage}
                  alt="Crianças sendo atendidas pela Casa dos Arcanjos"
                  className="rounded-2xl shadow-strong w-full h-auto object-cover"
                />

                <div className="absolute w-full inset-0 translate-x-3 translate-y-3 h-full rounded-2xl border-2 border-secondary" />
              </div>
            </div>
          </div>
        </section>
        {/* <div className="wave-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={`hsl(var(--primary))`} />
                <stop offset="100%" stopColor={`hsl(var(--primary-dark))`} />
              </linearGradient>
            </defs>

            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </div> */}

        <div className="wave-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none" /* Garante que a onda estique na largura total */
            className="wave-svg" /* Classe adicionada para controle CSS */
          >
            {/* Defs de gradiente REMOVIDAS aqui */}

            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor" /* Usa a cor definida na classe abaixo */
              className="text-background" /* Define a cor como BRANCO (ou a cor do fundo da próxima seção) */
            />
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            ref={missionRef.ref}
            className={`mx-auto transition-all duration-700 ${
              missionRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-8 text-center text-foreground">
              Um Pouco Sobre Nós
            </h2>
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <Card className="border-primary/20 shadow-soft hover-scale lg:col-span-1">
                <CardContent className="pt-6">
                  <Target className="mb-4 h-12 w-12 text-primary mx-auto" />
                  <h3 className="mb-3 text-xl font-bold text-foreground text-center">
                    Missão
                  </h3>
                  <p className="text-muted-foreground text-center">
                    Promover o desenvolvimento de crianças e adolescentes, com
                    suporte em um ambiente seguro e acolhedor.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 shadow-soft hover-scale lg:col-span-1">
                <CardContent className="pt-6">
                  <Award className="mb-4 h-12 w-12 text-secondary mx-auto" />
                  <h3 className="mb-3 text-xl font-bold text-foreground text-center">
                    Valores
                  </h3>
                  <p className="text-muted-foreground text-center">
                    Respeito, educação, transparência e compromisso com a
                    transformação social.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 shadow-soft hover-scale lg:col-span-1">
                <CardContent className="pt-6">
                  <Users className="mb-4 h-12 w-12 text-accent mx-auto" />
                  <h3 className="mb-3 text-xl font-bold text-foreground text-center">
                    Propósito
                  </h3>
                  <p className="text-muted-foreground text-center">
                    Construir uma sociedade mais justa, oferecendo esperança e
                    perspectiva de futuro.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground md:text-center">
              <p>
                Fundada há mais de uma década, a{" "}
                <strong>Casa dos Arcanjos</strong> nasceu da vontade de
                transformar a realidade de crianças, adolescentes e mulheres em
                situação de vulnerabilidade. Nossa atuação vai além de oferecer
                atividades: criamos vínculos, fortalecemos autoestima e
                desenvolvemos habilidades essenciais.
              </p>
              <p>
                Através de projetos como o <strong>Arcanjos BJJ</strong> e o{" "}
                <strong>Programa Asmara</strong>, já impactamos centenas de
                vidas, formando cidadãos conscientes e protagonistas de suas
                histórias.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover-scale max-w-full whitespace-normal min-h-fit py-2"
              >
                <Link to="/quem-somos">
                  Conheça Nossa História Completa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="gradient-light py-16 dot-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            ref={statsRef.ref}
            className={`mb-8 text-center transition-all duration-700 ${
              statsRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-4 text-foreground">Nosso Impacto em Números</h2>
            <p className="text-lg text-muted-foreground">
              Resultados concretos que transformam vidas
            </p>
          </div>

          <div
            className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-200 ${
              statsRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="border-none shadow-soft transition-smooth hover:shadow-medium hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-4xl font-bold text-foreground">
                  500+
                </h3>
                <p className="mb-2 font-semibold text-foreground">
                  Vidas Impactadas
                </p>
                <p className="text-sm text-muted-foreground">
                  Crianças, adolescentes e mulheres atendidas pelos nossos
                  projetos
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft transition-smooth hover:shadow-medium hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-secondary/10 p-4">
                    <Target className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-2 text-4xl font-bold text-foreground">1</h3>
                <p className="mb-2 font-semibold text-foreground">
                  Projetos Ativos
                </p>
                <p className="text-sm text-muted-foreground">
                  Programa Asmara (Gerando Falcões) transformando comunidades
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft transition-smooth hover:shadow-medium hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-accent/10 p-4">
                    <Award className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <h3 className="mb-2 text-4xl font-bold text-foreground">10+</h3>
                <p className="mb-2 font-semibold text-foreground">
                  Anos de História
                </p>
                <p className="text-sm text-muted-foreground">
                  Uma década dedicada à transformação social
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft transition-smooth hover:shadow-medium hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-4xl font-bold text-foreground">
                  350+
                </h3>
                <p className="mb-2 font-semibold text-foreground">
                  Jovens em Formação
                </p>
                <p className="text-sm text-muted-foreground">
                  Participantes ativos no Projeto Arcanjos BJJ
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft transition-smooth hover:shadow-medium hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-secondary/10 p-4">
                    <TrendingUp className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-2 text-4xl font-bold text-foreground">
                  150+
                </h3>
                <p className="mb-2 font-semibold text-foreground">
                  Mulheres Empoderadas
                </p>
                <p className="text-sm text-muted-foreground">
                  Participantes do Programa Asmara conquistando autonomia
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft transition-smooth hover:shadow-medium hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-accent/10 p-4">
                    <Calendar className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <h3 className="mb-2 text-4xl font-bold text-foreground">52</h3>
                <p className="mb-2 font-semibold text-foreground">
                  Semanas de Atividades
                </p>
                <p className="text-sm text-muted-foreground">
                  Atuação contínua durante todo o ano sem interrupções
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            ref={projectsRef.ref}
            className={`mb-12 text-center transition-all duration-700 ${
              projectsRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-4 text-foreground">Nossos Projetos</h2>
            <p className="text-lg text-muted-foreground">
              Conheça as iniciativas que estão transformando vidas
            </p>
          </div>

          <div
            className={`flex justify-center items-center transition-all duration-700 delay-200 ${
              projectsRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Arcanjos BJJ */}
            {/* <Card className="overflow-hidden shadow-medium transition-smooth hover:shadow-strong hover-scale">
              <div className="h-64 overflow-hidden">
                <img
                  src={bjjImage}
                  alt="Crianças praticando Jiu-Jitsu no Projeto Arcanjos BJJ"
                  className="h-full w-full object-cover transition-smooth hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Projeto Arcanjos BJJ
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Atende crianças e adolescentes em situação de vulnerabilidade,
                  desenvolvendo habilidades motoras, intelectuais e sociais
                  através do Jiu-Jitsu. Promovemos protagonismo, autoconfiança e
                  defesa pessoal.
                </p>
                <Button asChild variant="outline">
                  <Link to="/projetos#arcanjos-bjj">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card> */}

            {/* Asmara */}
            <Card className="overflow-hidden shadow-medium transition-smooth hover:shadow-strong hover-scale w-[50%]">
              <div className="h-64 overflow-hidden">
                <img
                  src={asmaraImage}
                  alt="Mulheres empreendedoras do Programa Asmara"
                  className="h-full w-full object-cover transition-smooth hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Programa Asmara
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Fortalece o impacto social e econômico de mulheres em
                  territórios vulneráveis. Oferece acesso a microfranquias,
                  formação técnica e desenvolvimento humano, promovendo
                  autonomia financeira e empreendedorismo.
                </p>
                <Button asChild variant="outline">
                  <Link to="/projetos#asmara">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Quick Donation Section */}
      <QuickDonation />

      {/* Transparency Section */}
      <TransparencyTracker />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Card className="gradient-hero overflow-hidden border-none shadow-strong">
            <CardContent className="p-8 text-center lg:p-12">
              <h2 className="mb-4 text-white">
                Faça Parte Desta Transformação
              </h2>
              <p className="mb-8 text-xl text-white/90">
                Sua doação ajuda a construir um futuro melhor para centenas de
                pessoas. Doe agora e seja um agente de mudança!
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild variant="warm" size="lg">
                  <Link to="/doacoes">
                    Doar Agora
                    <Heart className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white bg-white/10 text-white hover:bg-white hover:text-primary"
                >
                  <Link to="/contato">Entre em Contato</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
