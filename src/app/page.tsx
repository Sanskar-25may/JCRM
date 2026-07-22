import InteractiveDotGrid from "@/components/InteractiveDotGrid";
import GlassHero from "@/components/sections/GlassHero";
import GlassErpSolutions from "@/components/sections/GlassErpSolutions";
import GlassCourses from "@/components/sections/GlassCourses";
import GlassSuccessStories from "@/components/sections/GlassSuccessStories";
import GlassBentoFeatures from "@/components/sections/GlassBentoFeatures";
import GlassTestimonials from "@/components/sections/GlassTestimonials";
import GlassCta from "@/components/sections/GlassCta";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Interactive Dot Matrix Canvas */}
      <InteractiveDotGrid />

      {/* Glassmorphic Workspace Sections Layered Above Canvas */}
      <div className="relative z-10 space-y-12 sm:space-y-16">
        <GlassHero />
        <GlassErpSolutions />
        <GlassCourses />
        <GlassSuccessStories />
        <GlassBentoFeatures />
        <GlassTestimonials />
        <GlassCta />
      </div>
    </div>
  );
}
