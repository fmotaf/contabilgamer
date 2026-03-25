import { motion } from "framer-motion";

const InfoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl text-center space-y-6">
        <motion.p
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Se você já recebe por VIP, doações ou benefícios dentro do servidor, é importante organizar isso da forma correta.
        </motion.p>
        <motion.p
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Muitos donos de servidores começam informalmente, mas{" "}
          <span className="text-foreground font-semibold">profissionalizar faz toda a diferença</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default InfoSection;
