import HeroSection from "@/components/sections/HeroSection";
import ErpProductsSection from "@/components/sections/ErpProductsSection";
import TransformCtaSection from "@/components/sections/TransformCtaSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import PlacedCandidatesSection from "@/components/sections/PlacedCandidatesSection";

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <HeroSection />
      <ErpProductsSection />
      <TransformCtaSection />
      <WhyChooseUsSection />
      <PlacedCandidatesSection />
    </div>
  );
}
