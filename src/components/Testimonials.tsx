"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const sectionRef = useScrollAnimation();

  const testimonials = [
    {
      id: 1,
      name: "Ana Carolina Silva",
      role: "Mãe de participante",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      text: "O Projeto Arcanjos transformou a vida do meu filho. Ele ganhou disciplina, confiança e encontrou amigos de verdade. Sou eternamente grata!",
    },
    {
      id: 2,
      name: "Mariana Oliveira",
      role: "Participante do Programa Asmara",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      text: "Através do Programa Asmara consegui abrir meu próprio negócio e hoje sustento minha família com dignidade.",
    },
    {
      id: 3,
      name: "Carlos Eduardo Santos",
      role: "Ex-aluno do Arcanjos BJJ",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "Comecei no projeto aos 8 anos. Hoje sou faixa preta e instrutor voluntário. O Jiu-Jitsu me deu propósito e direção na vida.",
    },
    {
      id: 4,
      name: "Juliana Costa",
      role: "Participante do Programa Asmara",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
      text: "Aprendi a ter autonomia financeira e a acreditar no meu potencial. O Asmara mudou minha perspectiva de futuro completamente!",
    },
    {
      id: 5,
      name: "Roberto Alves",
      role: "Pai de participante",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      text: "Meu filho era tímido e inseguro. Hoje ele defende seus colegas do bullying e é líder na escola. Gratidão eterna ao projeto!",
    },
    {
      id: 6,
      name: "Fernanda Lima",
      role: "Participante do Programa Asmara",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
      text: "Conquistei minha independência financeira e aprendi que posso ser protagonista da minha história. O Asmara é vida!",
    },
  ];

  return (
    <section className="overflow-hidden relative gradient-light py-16 lg:py-24 style-topo">
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* HEADER COM ANIMAÇÃO */}
        <div
          ref={sectionRef.ref}
          className={`mb-12 text-center transition-all duration-700 ${
            sectionRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="mb-4 text-foreground">Depoimentos de Transformação</h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de pessoas que tiveram suas vidas transformadas
          </p>
        </div>

        {/* CARROSSEL SHADCN COM LOOP + AUTOPLAY */}
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 3500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="gap-3 ml-0 px-3">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="
                  md:basis-1/2
                  lg:basis-1/3
                  pl-0
                  flex
                "
              >
                <Card className="shadow-soft hover:shadow-medium transition-smooth flex-1">
                  <CardContent className="pt-6 min-h-full flex flex-col">
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />
                    <div className="flex flex-col gap-6 justify-between flex-1">
                      <p className="text-muted-foreground italic leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <svg className="topo-lines" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <path className="topo-path" d="M0,200 Q360,400 720,200 T1440,200 M0,300 Q360,500 720,300 T1440,300 M0,400 Q360,600 720,400 T1440,400 M0,500 Q360,700 720,500 T1440,500" />
          {/* <path className="topo-path" d="M0,600 Q200,300 400,600 T800,600 T1200,600 M0,700 Q200,400 400,700 T800,700 T1200,700"/> */}
      </svg>
    </section>
  );
};

export default Testimonials;
