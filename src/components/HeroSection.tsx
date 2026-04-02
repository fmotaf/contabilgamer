import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[72vh] md:min-h-[78vh] flex items-center justify-center overflow-hidden py-16 md:py-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            🎮 Organize seu servidor com estratégia
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Contabilidade para{" "}
            <span className="text-primary">crescer com segurança</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3">
            Estruture a parte financeira do seu projeto e transforme a operação em um negócio mais estável e previsível.
          </p>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10">
            Ajudamos donos de servidores FiveM e MTA a profissionalizar VIP, doações e benefícios sem complicação.
          </p> */}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
            <a href="https://wa.me/message/JRKAVV62SVTXP1" target="_blank" rel="noreferrer">
              🎮 Quero organizar meu FiveM
            </a>
          </Button>
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/25">
            <a href="https://wa.me/message/JRKAVV62SVTXP1" target="_blank" rel="noreferrer">
              🎮 Quero organizar meu MTA
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
