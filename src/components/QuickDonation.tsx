import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, Building2 } from "lucide-react";
import { useState } from "react";
import pixQrCode from "@/assets/pix-qrcode.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const QuickDonation = () => {
  const sectionRef = useScrollAnimation();
  const [copiedPix, setCopiedPix] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const pixKey = "21.919.893/0001-43";
  const bankData = {
    banco: "Banco do Bradesco",
    agencia: "7338",
    conta: "97070-0",
    cnpj: "21.919.893/0001-43",
    razao: "A Casa dos Arcanjos",
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const handleCopyBank = () => {
    const bankText = `${bankData.banco}\nAgência: ${bankData.agencia}\nConta: ${bankData.conta}\nCNPJ: ${bankData.cnpj}\n${bankData.razao}`;
    navigator.clipboard.writeText(bankText);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  return (
    <section className="py-16 lg:py-24" id="doacoes">
      <div className="container mx-auto max-w-6xl px-4">
        <div
          ref={sectionRef.ref}
          className={`mb-12 transition-all duration-700 ${
            sectionRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="mb-4 text-center text-foreground">
            Transforme Vidas Agora!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-left md:text-center">
            <strong>Cada segundo conta!</strong> Sua doação oferece educação,
            esporte e oportunidades para quem mais precisa. Escolha a forma mais
            prática e seja parte dessa transformação imediata.
          </p>
        </div>

        <div
          className={`grid gap-8 lg:grid-cols-2 mx-auto transition-all duration-700 delay-200 ${
            sectionRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Pix Card */}
          <Card className="shadow-medium transition-smooth hover:shadow-strong hover-scale">
            <CardContent className="p-8">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.05 2.05L4.93 4.17l-2.12-2.12L1.4 3.46l2.12 2.12L1.4 7.7l1.41 1.41 2.12-2.12 2.12 2.12 1.41-1.41-2.12-2.12 2.12-2.12L7.05 2.05zm9.9 9.9l-2.12-2.12-1.41 1.41 2.12 2.12-2.12 2.12 1.41 1.41 2.12-2.12 2.12 2.12 1.41-1.41-2.12-2.12 2.12-2.12-1.41-1.41-2.12 2.12zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  💨 Pix - Rápido e Fácil
                </h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Doação em segundos!</strong> Instantânea, segura e sem
                  taxas.
                </p>
              </div>

              <div className="mb-6 flex justify-center">
                <div className="rounded-lg bg-white p-4 shadow-soft">
                  <img
                    src={pixQrCode}
                    alt="QR Code Pix"
                    className="h-48 w-48"
                  />
                </div>
              </div>

              <div className="mb-4 rounded-lg bg-muted p-4">
                <p className="mb-1 text-xs font-semibold text-muted-foreground">
                  Chave Pix (CNPJ)
                </p>
                <p className="font-mono text-lg font-bold text-foreground">
                  {pixKey}
                </p>
              </div>

              <Button
                onClick={handleCopyPix}
                className="w-full"
                variant={copiedPix ? "outline" : "default"}
              >
                {copiedPix ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar Chave Pix
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Bank Transfer Card */}
          <Card className="shadow-medium transition-smooth hover:shadow-strong hover-scale">
            <CardContent className="p-8">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Building2 className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  🏦 Transferência Bancária
                </h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Segurança garantida!</strong> Método tradicional e
                  100% confiável.
                </p>
              </div>

              <div className="mb-6 space-y-3">
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Banco
                  </p>
                  <p className="font-semibold text-foreground">
                    {bankData.banco}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-xs font-semibold text-muted-foreground">
                      Agência
                    </p>
                    <p className="font-mono font-semibold text-foreground">
                      {bankData.agencia}
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-xs font-semibold text-muted-foreground">
                      Conta
                    </p>
                    <p className="font-mono font-semibold text-foreground">
                      {bankData.conta}
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground">
                    CNPJ
                  </p>
                  <p className="font-mono font-semibold text-foreground">
                    {bankData.cnpj}
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Razão Social
                  </p>
                  <p className="font-semibold text-foreground">
                    {bankData.razao}
                  </p>
                </div>
              </div>

              <Button
                onClick={handleCopyBank}
                className="w-full"
                variant={copiedBank ? "outline" : "default"}
              >
                {copiedBank ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar Dados Bancários
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickDonation;
