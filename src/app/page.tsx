import InteractiveDotGrid from "@/components/InteractiveDotGrid";
import HeroSection from "@/components/sections/HeroSection";
import ErpProductsSection from "@/components/sections/ErpProductsSection";
import TransformCtaSection from "@/components/sections/TransformCtaSection";

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <InteractiveDotGrid />
      <HeroSection />
      <ErpProductsSection />
      <TransformCtaSection />
    </div>
  );
}
