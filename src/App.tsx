import { useEffect } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from './hooks/useReducedMotion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredentialsStrip } from './components/CredentialsStrip';
import { About } from './components/About';
import { Practice } from './components/Practice';
import { Process } from './components/Process';
import { Prepare } from './components/Prepare';
import { HighCourtMap } from './components/HighCourtMap';
import { Skiper31 } from './components/ui/text-scroll-animation';
import { Faq } from './components/Faq';
import { ContactFooter } from './components/ContactFooter';
import { DisclaimerModal } from './components/DisclaimerModal';

export default function App() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="min-h-screen bg-[#F6F5F2] text-[#1A1A18] font-body selection:bg-[#1F3D2F] selection:text-[#F6F5F2]">
      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Full-bleed Hero with Parallax & Mask Reveal */}
        <Hero />

        {/* Credentials Infinite Marquee Strip */}
        <CredentialsStrip />

        {/* The Advocate: Editorial Statement, Facts Ticker & Portrait */}
        <About />

        {/* Areas of Practice: 6 Cards with Chips & Hover Zoom */}
        <Practice />

        {/* How a Matter Begins: Sticky Scroll Sequence */}
        <Process />

        {/* Papers that Help: Bento Grid */}
        <Prepare />

        {/* Dynamic Text Scroll Animation: Allahabad High Court */}
        <Skiper31 />

        {/* High Court Location: Cinematic Interactive Google Map & Chamber */}
        <HighCourtMap />

        {/* FAQ: Clean Editorial Accordion */}
        <Faq />
      </main>

      {/* Contact Panel & Full Legal Footer */}
      <ContactFooter />

      {/* Optional Bar Council of India Gate Modal */}
      <DisclaimerModal />
    </div>
  );
}
