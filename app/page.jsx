import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}