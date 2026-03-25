import { motion } from "framer-motion";
import { FileText, Scale, Receipt, Settings, CalendarCheck, Users } from "lucide-react";

const solucoes = [
  { icon: FileText, label: "Abertura de CNPJ" },
  { icon: Scale, label: "Enquadramento tributário estratégico" },
  { icon: Receipt, label: "Emissão de notas fiscais" },
  { icon: Settings, label: "Alterações e regularizações" },
  { icon: CalendarCheck, label: "Acompanhamento mensal" },
  { icon: Users, label: "Gestão de RH" },
];

const SolucoesSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Soluções
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solucoes.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolucoesSection;
