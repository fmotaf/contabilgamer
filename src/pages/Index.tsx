import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import SolucoesSection from "@/components/SolucoesSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <InfoSection />
      <SolucoesSection />
      <BeneficiosSection />
      <CtaSection />
    </main>
  );
};

export default Index;
