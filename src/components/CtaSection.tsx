import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="relative container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme seu servidor em um{" "}
            <span className="text-primary">negócio de verdade</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Atendimento online para todo o Brasil
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25"
            asChild
          >
            <a href="https://wa.me/5575991990933" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-discord hover:bg-discord/90 text-discord-foreground shadow-lg shadow-discord/25"
          >
            🎧 Entrar no Discord
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
