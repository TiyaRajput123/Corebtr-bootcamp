import './styles/globals.css';
import './styles/animations.css';
import './styles/polish.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Ticker from './components/ui/Ticker';
import StatsBar from './components/StatsBar/StatsBar';
import BTRFramework from './components/BTRFramework/BTRFramework';
import Features from './components/Features/Features';
import Curriculum from './components/Curriculum/Curriculum';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import BackToTop from './components/ui/BackToTop';
import FloatingCTA from './components/ui/FloatingCTA';

export default function App() {
  return (
    <>
      {/* Global polish layer */}
      <ScrollProgressBar />

      <Navbar />

      <main id="main-content">
        <Hero />
        <Ticker />
        <StatsBar />
        <BTRFramework />
        <Features />
        <Curriculum />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <Footer />

      {/* Floating helpers */}
      <FloatingCTA />
      <BackToTop />
    </>
  );
}
