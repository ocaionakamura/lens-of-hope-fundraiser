import { Heart, Target, DollarSign, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Vaquinha Solidária - Lente para Ceratocone",
        text: "Ajude o Robson a custear lentes especiais para ceratocone!",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copiado para a área de transferência!");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header com coração */}
      <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-accent mb-6 shadow-lg">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground fill-current animate-pulse" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Vaquinha Solidária
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Lente para Ceratocone
          </p>
        </div>

        {/* Card principal */}
        <Card className="mb-8 p-6 md:p-10 shadow-xl border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
          <div className="space-y-6 md:space-y-8">
            <section>
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Olá!
              </h2>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                Estamos organizando esta vaquinha para arrecadar fundos e ajudar o{" "}
                <strong className="text-primary">Robson</strong> a custear uma lente
                especial para ceratocone, uma condição que afeta a visão e exige
                lentes de contato específicas e de alto valor.
              </p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                Essas lentes são essenciais para proporcionar melhor qualidade de
                vida e conforto visual.
              </p>
            </section>

            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 md:p-8 text-center border border-primary/20">
              <p className="text-base md:text-lg text-foreground/80 mb-2">
                Com sua ajuda, o Robson poderá enxergar melhor e ter mais qualidade
                de vida. 💖
              </p>
            </div>
          </div>
        </Card>

        {/* Cards informativos */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Meta */}
          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Meta</h3>
            <p className="text-3xl md:text-4xl font-bold text-primary">
              R$ 3.000
            </p>
          </Card>

          {/* Como contribuir */}
          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/30 border-2 border-accent/20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
              <DollarSign className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Como Contribuir
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Qualquer valor é bem-vindo!
            </p>
            <p className="text-base font-medium text-foreground">
              💳 Contribua por Pix
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              ✍️ Preencha a lista para registrar
            </p>
          </Card>

          {/* Prazo */}
          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/30 border-2 border-secondary/20">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
              <Calendar className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Prazo Final</h3>
            <p className="text-lg md:text-xl font-bold text-foreground">
              31 de outubro
            </p>
            <p className="text-base text-muted-foreground">de 2025</p>
          </Card>
        </div>

        {/* Call to action */}
        <Card className="p-6 md:p-8 text-center bg-gradient-to-br from-primary via-accent to-primary shadow-xl border-2 border-primary/30">
          <p className="text-base md:text-lg text-primary-foreground/95 mb-6 leading-relaxed">
            Toda ajuda é muito bem-vinda — seja com uma doação ou compartilhando
            esta causa com amigos e familiares.
          </p>
          <Button
            onClick={handleShare}
            size="lg"
            className="bg-card text-primary hover:bg-card/90 shadow-lg font-semibold text-base md:text-lg px-8 py-6 rounded-full"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Compartilhar Campanha
          </Button>
        </Card>

        {/* Agradecimento */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-xl md:text-2xl font-semibold text-primary mb-2">
            ✨ Muito obrigado(a) por sua solidariedade e apoio! ✨
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
