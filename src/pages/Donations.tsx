import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Copy, QrCode, Building2, MessageCircle, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Donations = () => {
  const { toast } = useToast();
  const pixRef = useScrollAnimation();
  const bankRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const pixKey = "21.919.893/0001-43";
  const bankData = {
    bank: "Banco do Bradesco",
    agency: "7338",
    account: "97070-0",
    cnpj: "21.919.893/0001-43",
    name: "A Casa dos Arcanjos",
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: `${type} copiado para a área de transferência.`,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">❤️ Transforme Vidas AGORA!</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              <strong>Sua doação muda destinos!</strong> Cada contribuição oferece educação, 
              esporte e esperança para crianças e adolescentes. <strong>Doe agora e faça história!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-16 lg:py-24 style-dash overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-5xl space-y-8">
            {/* Pix */}
            <Card 
              ref={pixRef.ref}
              className={`shadow-medium transition-all duration-700 ${
                pixRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <QrCode className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Doação via Pix</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Chave Pix (CNPJ)
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      value={pixKey}
                      readOnly
                      className="font-mono text-base"
                    />
                    <Button
                      variant="outline"
                      onClick={() => handleCopy(pixKey, "Chave Pix")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-6 text-center">
                  <p className="mb-4 text-sm text-muted-foreground">
                    QR Code Pix
                  </p>
                  <div className="mx-auto h-64 w-64 rounded-lg bg-background shadow-soft">
                    <div className="flex h-full items-center justify-center">
                      <QrCode className="h-32 w-32 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Escaneie o QR Code com o aplicativo do seu banco
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm text-muted-foreground">
                    O Pix é instantâneo e sem taxas! Sua doação chega
                    imediatamente e integralmente para nossos projetos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Bank Transfer */}
            <Card 
              ref={bankRef.ref}
              className={`shadow-medium transition-all duration-700 delay-200 ${
                bankRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">
                    Doação via Transferência Bancária
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Banco
                    </Label>
                    <Input value={bankData.bank} readOnly />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Agência
                    </Label>
                    <Input value={bankData.agency} readOnly />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Conta Corrente
                    </Label>
                    <Input value={bankData.account} readOnly />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">CNPJ</Label>
                    <Input value={bankData.cnpj} readOnly />
                  </div>
                  <div className="md:col-span-2">
                    <Label className="mb-2 block text-sm font-medium">
                      Favorecido
                    </Label>
                    <Input value={bankData.name} readOnly />
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    handleCopy(
                      `Banco: ${bankData.bank}\nAgência: ${bankData.agency}\nConta: ${bankData.account}\nCNPJ: ${bankData.cnpj}\nFavorecido: ${bankData.name}`,
                      "Dados bancários"
                    )
                  }
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copiar Dados Bancários
                </Button>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card 
              ref={contactRef.ref}
              className={`shadow-medium transition-all duration-700 delay-300 ${
                contactRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">
                    Doação Direta ou Parcerias
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
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
                      <Label htmlFor="email">E-mail</Label>
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
                      <Label htmlFor="phone">Telefone</Label>
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
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Conte-nos como você gostaria de contribuir ou faça sua pergunta..."
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Enviar Mensagem
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                <div className="mt-6 space-y-2 rounded-lg border border-accent/20 bg-accent/5 p-4">
                  <p className="font-semibold text-foreground">
                    Entre em contato direto:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    WhatsApp: (11) 96822-5500
                  </p>
                  <p className="text-sm text-muted-foreground">
                    E-mail: alineoliveiranunes1992@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <svg className="dash-svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path className="dash-path" d="M-100,500 C200,100 800,900 1100,500" />
            <path className="dash-path" d="M-100,200 C300,600 700,-900 9000,50" style={{animationDuration: "60s"}} />
            <path className="dash-path" d="M-100,200 C300,600 700,0 1100,800" style={{animationDuration: "80s"}} />
            <path className="dash-path" d="M-100,800 C300,400 700,1000 1100,200" style={{animationDuration: "50s"}} />
            <path className="dash-path" d="M-100,800 C300,400 700,1500 2000,1000" style={{animationDuration: "100s"}} />
        </svg>
      </section>

      {/* Info Section */}
      <section className="gradient-light py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-foreground">
              Transparência e Compromisso
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Todas as doações são aplicadas diretamente em nossos projetos
              sociais. Mantemos total transparência sobre o uso dos recursos e
              prestamos contas regularmente à comunidade.
            </p>
            <p className="text-lg text-muted-foreground">
              Sua generosidade transforma vidas. Obrigado por fazer parte desta
              missão!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
