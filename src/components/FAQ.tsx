import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQ = () => {
  const sectionRef = useScrollAnimation();
  const faqs = [
    {
      question: "Como posso fazer uma doação?",
      answer: "Você pode doar de três formas: via Pix (instantâneo), transferência bancária ou entrando em contato direto conosco para doações maiores ou parcerias. Todas as informações estão disponíveis na página de Doações."
    },
    {
      question: "Minha doação é dedutível no Imposto de Renda?",
      answer: "Sim! A Casa dos Arcanjos é uma ONG registrada e sua doação pode ser deduzida do Imposto de Renda conforme a legislação vigente. Após sua doação, emitiremos um recibo que poderá ser usado na sua declaração."
    },
    {
      question: "Como posso ter certeza de que minha doação será bem utilizada?",
      answer: "Acreditamos em total transparência. Publicamos relatórios regulares de atividades e prestação de contas. Você pode acompanhar nosso trabalho através das redes sociais e entrar em contato para conhecer pessoalmente nossos projetos."
    },
    {
      question: "Qual o valor mínimo para doar?",
      answer: "Não há valor mínimo! Toda contribuição, independente do valor, é muito bem-vinda e faz diferença. Cada real doado é investido diretamente em nossos projetos e beneficiários."
    },
    {
      question: "Posso doar materiais ou serviços ao invés de dinheiro?",
      answer: "Sim! Aceitamos doações de materiais esportivos, equipamentos, roupas e também trabalho voluntário. Entre em contato conosco para entender melhor nossas necessidades atuais e como você pode ajudar."
    },
    {
      question: "Como funciona o apadrinhamento de uma criança?",
      answer: "Através do programa de apadrinhamento, você pode contribuir mensalmente para apoiar diretamente uma criança ou adolescente em nossos projetos. Entre em contato para conhecer os detalhes e iniciar seu apadrinhamento."
    },
    {
      question: "Posso visitar os projetos da ONG?",
      answer: "Sim! Adoramos receber visitantes e potenciais parceiros. Entre em contato conosco para agendar uma visita e conhecer de perto o impacto do nosso trabalho. Será um prazer recebê-lo!"
    },
    {
      question: "Como posso ter certeza de que minha doação será bem utilizada?",
      answer: "Acreditamos em total transparência. Publicamos relatórios regulares de atividades e prestação de contas. Você pode acompanhar nosso trabalho através das redes sociais e entrar em contato para conhecer pessoalmente nossos projetos."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="">
          <div 
            ref={sectionRef.ref}
            className={`mb-12 text-center transition-all duration-700 ${
              sectionRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-4 text-foreground">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tire suas dúvidas sobre doações, nossos projetos e como você pode fazer parte dessa transformação
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
            sectionRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-lg px-6 border shadow-soft"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                <AccordionItem 
                  key={index + Math.ceil(faqs.length / 2)} 
                  value={`item-${index + Math.ceil(faqs.length / 2)}`}
                  className="bg-card rounded-lg px-6 border shadow-soft"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
