import HeroSection from "@/components/sections/HeroSection";
import ErpProductsSection from "@/components/sections/ErpProductsSection";
import TransformCtaSection from "@/components/sections/TransformCtaSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TrainingPlacementSection from "@/components/sections/TrainingPlacementSection";
import PlacedCandidatesSection from "@/components/sections/PlacedCandidatesSection";
import JoinTalentNetworkSection from "@/components/sections/JoinTalentNetworkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <HeroSection />
      <ErpProductsSection />
      <TransformCtaSection />
      <WhyChooseUsSection />
      <TrainingPlacementSection />
      <PlacedCandidatesSection />
      <JoinTalentNetworkSection />
      <TestimonialsSection />
    </div>
  );
}
