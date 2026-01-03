import Header from '@/components/Header';
import HeroSection1 from '@/components/HeroSection1';
import HeroSection2 from '@/components/HeroSection2';
import HeroSection3 from '@/components/HeroSection3';
import WhyChooseCres from '@/components/WhyChooseCres';
import HowCresWorks from '@/components/HowCresWorks';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection1 />
        <HeroSection2 />
        <HeroSection3 />
        <WhyChooseCres />
        <HowCresWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
