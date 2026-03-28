import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Award, Users, Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamImage from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-community.jpg";

const About = () => {
  const historyRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const timelineRef = useScrollAnimation();

  const purposeRef = useScrollAnimation();
  const missionRef = useScrollAnimation();

  const timelineData = [
    {
      year: "2010",
      title: "Fundação da ONG",
      description:
        "Início das atividades com foco em atendimento a crianças e adolescentes.",
    },
    {
      year: "2015",
      title: "Expansão dos Projetos",
      description:
        "Lançamento do Projeto Arcanjos BJJ, levando o Jiu-Jitsu para jovens em vulnerabilidade.",
    },
    {
      year: "2020",
      title: "Reconhecimento Nacional",
      description:
        "Premiação por impacto social e desenvolvimento comunitário.",
    },
    {
      year: "2024",
      title: "Programa Asmara",
      description:
        "Início do programa de empreendedorismo feminino em parceria com Instituto Gerando Falcões.",
    },
  ];

  const TimelineCard = ({
    item,
    className,
  }: {
    item: (typeof timelineData)[0];
    className?: string;
  }) => (
    <Card className={`shadow-soft ${className || ""}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
            {item.year}
          </div>
          <div>
            <h3 className="mb-2 text-xl font-bold text-foreground">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">Quem Somos</h1>
            <p className="text-xl text-white/90">
              Conheça a história, missão e valores da Casa dos Arcanjos
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            ref={historyRef.ref}
            className={`mx-auto transition-all duration-700 ${
              historyRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-8 text-center text-foreground">Nossa História</h2>

            {/* <div className=""> */}

            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <img
                  src={heroImage}
                  alt="Comunidade Casa dos Arcanjos"
                  className="rounded-2xl shadow-medium w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4 text-xl text-muted-foreground">
                <p>
                  A <strong>Casa dos Arcanjos</strong> nasceu da vontade de
                  transformar a realidade de crianças, adolescentes e mulheres
                  em situação de vulnerabilidade social. Fundada há mais de uma
                  década, nossa ONG tem como missão oferecer oportunidades reais
                  de desenvolvimento e crescimento através do esporte, educação
                  e empreendedorismo.
                </p>
                <p>
                  O que começou como um projeto local cresceu e se tornou uma
                  referência em transformação social na região de Barueri. Nosso
                  compromisso vai além de oferecer atividades: construímos
                  vínculos duradouros, desenvolvemos potenciais e formamos
                  cidadãos conscientes.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-xl text-muted-foreground order-2 lg:order-1">
                <p>
                  Ao longo dos anos, impactamos centenas de vidas,
                  proporcionando não apenas atividades, mas também formação
                  cidadã, desenvolvimento de habilidades e construção de sonhos.
                  Cada pessoa que passa por nossos projetos carrega consigo a
                  transformação que acreditamos ser possível.
                </p>
                <p>
                  Nosso trabalho é movido pela certeza de que todos merecem
                  oportunidades justas e que, com apoio adequado, cada indivíduo
                  pode alcançar seu pleno potencial e ser agente de mudança em
                  sua comunidade.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={teamImage}
                  alt="Equipe Casa dos Arcanjos"
                  className="rounded-2xl shadow-medium w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            ref={missionRef.ref}
            className={`transition-all duration-700 ${
              missionRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-8 text-center text-foreground">Nossa Missão</h2>
            <div className="">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Texto à esquerda */}
                <div className="space-y-4 text-left">
                  <p className="text-xl text-muted-foreground">
                    Transformar vidas através do desenvolvimento integral de
                    crianças, adolescentes e mulheres em situação de
                    vulnerabilidade social, promovendo cidadania, educação e
                    autonomia por meio do esporte, empreendedorismo e
                    capacitação profissional.
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Acreditamos que cada indivíduo tem direito a oportunidades
                    justas e ao desenvolvimento de seu pleno potencial.
                    Trabalhamos todos os dias para que nossos beneficiados se
                    tornem protagonistas de suas histórias e agentes de mudança
                    em suas comunidades.
                  </p>
                </div>

                {/* Vídeo à direita */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-medium">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/UnDuVejCIMA"
                    title="Nossa Missão - Casa dos Arcanjos"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visão e Valores */}
      <section className="gradient-light py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            ref={valuesRef.ref}
            className={`transition-all duration-700 ${
              valuesRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-12 text-center text-foreground">
              Visão e Valores
            </h2>
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <Card className="border-none shadow-soft hover-scale">
                <CardContent className="pt-6">
                  <Eye className="mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    Visão
                  </h3>
                  <p className="text-muted-foreground">
                    Ser referência nacional em projetos sociais que geram
                    impacto real e duradouro, formando cidadãos conscientes e
                    protagonistas de suas histórias, reconhecidos pela
                    excelência na transformação de comunidades vulneráveis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft hover-scale">
                <CardContent className="pt-6">
                  <Award className="mb-4 h-12 w-12 text-accent" />
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    Valores
                  </h3>
                  <ul className="text-muted-foreground grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li className="flex-1">• Respeito e dignidade humana</li>
                    <li className="flex-1">
                      • Transformação social sustentável
                    </li>
                    <li className="flex-1">
                      • Educação e desenvolvimento contínuo
                    </li>
                    <li className="flex-1">• Protagonismo e autonomia</li>
                    <li className="flex-1">• Transparência e compromisso</li>
                    <li className="flex-1">• Inclusão e diversidade</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-primary/20 shadow-soft hover-scale">
                <CardContent className="pt-6 text-center">
                  <Users className="mx-auto mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    Impacto Coletivo
                  </h3>
                  <p className="text-muted-foreground">
                    Trabalhamos em rede com parceiros para amplificar nosso
                    impacto social.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 shadow-soft hover-scale">
                <CardContent className="pt-6 text-center">
                  <Handshake className="mx-auto mb-4 h-10 w-10 text-secondary" />
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    Compromisso
                  </h3>
                  <p className="text-muted-foreground">
                    Dedicação total à transformação de vidas e comunidades.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 shadow-soft hover-scale">
                <CardContent className="pt-6 text-center">
                  <Heart className="mx-auto mb-4 h-10 w-10 text-accent" />
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    Empatia
                  </h3>
                  <p className="text-muted-foreground">
                    Compreensão e acolhimento são a base de nosso trabalho.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            ref={purposeRef.ref}
            className={`transition-all duration-700 ${
              purposeRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-8 text-center text-foreground">
              Nosso Propósito
            </h2>
            <div className="">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Vídeo à esquerda */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-medium">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/UnDuVejCIMA"
                    title="Nossa Missão - Casa dos Arcanjos"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Texto à direita */}
                <div className="space-y-4 text-left">
                  <p className="text-xl text-muted-foreground">
                    Acreditamos que todos têm direito a oportunidades justas e
                    ao desenvolvimento de seu pleno potencial. Trabalhamos todos
                    os dias para construir uma sociedade mais justa, inclusiva e
                    compassiva, onde cada pessoa possa sonhar, crescer e
                    transformar sua realidade.
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Acreditamos que todos têm direito a oportunidades justas e
                    ao desenvolvimento de seu pleno potencial. Trabalhamos todos
                    os dias para construir uma sociedade mais justa, inclusiva e
                    compassiva, onde cada pessoa possa sonhar, crescer e
                    transformar sua realidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do Tempo */}
      <section className="gradient-light py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            ref={timelineRef.ref}
            className={`transition-all duration-700 ${
              timelineRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-12 text-center text-foreground">
              Nossa Trajetória
            </h2>

            {/* Desktop View - Horizontal Masonry */}
            <div className="hidden lg:block">
              <div className="flex flex-col gap-6">
                {/* Row 1 - 2 cards with different sizes */}
                <div className="flex gap-6">
                  <TimelineCard item={timelineData[0]} className="flex-1" />
                  <TimelineCard item={timelineData[1]} className="flex-[1.5]" />
                </div>

                {/* Row 2 - 2 cards with different sizes */}
                <div className="flex gap-6">
                  <TimelineCard item={timelineData[2]} className="flex-[1.5]" />
                  <TimelineCard item={timelineData[3]} className="flex-1" />
                </div>
              </div>
            </div>

            {/* Mobile View - Static Grid */}
            <div className="lg:hidden grid grid-cols-1 gap-6">
              {timelineData.map((item, index) => (
                <Card key={`mobile-${index}`} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                        {item.year}
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
