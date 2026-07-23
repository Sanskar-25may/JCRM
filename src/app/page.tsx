import DynamicBackground from "@/components/DynamicBackground";
import HeroSection from "@/components/sections/HeroSection";
import ErpProductsSection from "@/components/sections/ErpProductsSection";
import TransformCtaSection from "@/components/sections/TransformCtaSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <DynamicBackground />
      <HeroSection />
      <ErpProductsSection />
      <TransformCtaSection />
      <WhyChooseUsSection />
    </div>
  );
}
