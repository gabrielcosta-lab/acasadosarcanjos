import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Instagram, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const contactRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-12 md:py-20 lg:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">Entre em Contato</h1>
            <p className="text-xl text-white/90">
              Estamos aqui para responder suas dúvidas e ouvir suas sugestões
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div 
              ref={contactRef.ref}
              className={`space-y-6 transition-all duration-700 ${
                contactRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div>
                <h2 className="mb-6 text-foreground">Fale Conosco</h2>
                <p className="text-lg text-muted-foreground">
                  Tem dúvidas, sugestões ou gostaria de conhecer melhor nosso
                  trabalho? Entre em contato pelos canais abaixo ou preencha o
                  formulário.
                </p>
              </div>

              <Card className="shadow-soft">
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-xl font-semibold text-foreground">
                        Endereço
                      </h4>
                      <p className="text-muted-foreground">
                        R. Herman, 336 - Jardim Julio
                        <br />
                        Barueri - SP, 06447-300
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-xl font-semibold text-foreground">
                        Telefone
                      </h4>
                      <a
                        href="tel:+5511968225500"
                        className="text-muted-foreground transition-smooth hover:text-primary"
                      >
                        (11) 96822-5500
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-xl font-semibold text-foreground">
                        E-mail
                      </h4>
                      <a
                        href="mailto:contato@casadosarcanjos.org"
                        className="text-muted-foreground transition-smooth hover:text-primary break-all"
                      >
                        alineoliveiranunes1992@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-xl font-semibold text-foreground">
                        Instagram
                      </h4>
                      <a
                        href="https://instagram.com/acasadosarcanjos.cda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-smooth hover:text-primary break-all"
                      >
                        @acasadosarcanjos.cda
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-xl font-semibold text-foreground">
                        WhatsApp
                      </h4>
                      <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-smooth hover:text-primary break-words"
                      >
                        Fale conosco pelo WhatsApp
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card 
              ref={formRef.ref}
              className={`shadow-medium transition-all duration-700 ${
                formRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Digite sua mensagem aqui..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="gradient-light py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-foreground">
              Venha nos Visitar
            </h2>
            <div className="overflow-hidden rounded-2xl shadow-medium">
              <div className="h-96 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.123456789012!2d-46.876543!3d-23.512345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzQ0LjQiUyA0NsKwNTInMzUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização A Casa dos Arcanjos"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
