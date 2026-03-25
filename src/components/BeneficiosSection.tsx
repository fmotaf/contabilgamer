import { motion } from "framer-motion";
import { TrendingDown, ShieldCheck, Briefcase, Rocket, Heart } from "lucide-react";

const beneficios = [
  { icon: TrendingDown, label: "Pague menos impostos de forma legal" },
  { icon: ShieldCheck, label: "Evite problemas fiscais e bancários" },
  { icon: Briefcase, label: "Profissionalize seu servidor" },
  { icon: Rocket, label: "Mais segurança para crescer" },
  { icon: Heart, label: "Mais confiança para seus players" },
];

const BeneficiosSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Benefícios
        </motion.h2>
        <div className="space-y-4">
          {beneficios.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground font-medium text-lg">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
