import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            🎮 Especialistas em servidores de jogos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Contabilidade para{" "}
            <span className="text-primary">Servidores de Jogos</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Regularize seu servidor e monetize com segurança, sem complicação.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Soluções completas para donos de servidores FiveM e MTA que querem crescer de forma profissional.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
            🎮 Sou dono de servidor FiveM
          </Button>
          <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/25">
            🎮 Sou dono de servidor MTA
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
