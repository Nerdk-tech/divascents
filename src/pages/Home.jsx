import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import FeaturedProducts from "../components/home/FeaturedProducts";
import AboutPreview from "../components/home/AboutPreview";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedProducts />
      <AboutPreview />
      <Testimonials />
    </>
  );
}