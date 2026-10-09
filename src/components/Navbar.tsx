import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { profile } from '../data/profile';
import { FlowButton } from './ui/flow-button';
import { cn } from '../lib/utils';
import { useReducedMotion } from '../hooks/useReducedMotion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Practice', href: '#practice' },
  { label: 'Process', href: '#process' },
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 40);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
        )}
      >
        <nav
          aria-label="Main Navigation"
          className={cn(
            "relative flex items-center justify-between w-full max-w-[1100px] h-[52px] sm:h-[64px] px-4 sm:px-8 rounded-full",
            "bg-[#0C0C0B]/60 backdrop-blur-md border border-[rgba(246,245,242,0.16)] text-[#F6F5F2]",
            "transition-shadow duration-300",
            hasScrolled && "shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]"
          )}
        >
          {/* Wordmark (left) */}
          <a
            href="#top"
            className="font-heading text-[1rem] sm:text-[1.2rem] font-medium tracking-tight hover:opacity-80 transition-opacity"
          >
            {profile.name}
          </a>

          {/* Desktop Links (middle) with fluid hover animation */}
          <div
            className="hidden md:flex items-center gap-1 text-[0.9375rem] text-[#ECEAE5]/80 font-normal p-1 rounded-full relative"
            onMouseLeave={() => setHoveredNavIndex(null)}
          >
            {NAV_LINKS.map((link, index) => {
              const isHovered = hoveredNavIndex === index;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredNavIndex(index)}
                  onFocus={() => setHoveredNavIndex(index)}
                  onBlur={() => setHoveredNavIndex(null)}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-[0.875rem] font-medium transition-colors duration-200 outline-hidden",
                    isHovered ? "text-[#F6F5F2]" : "text-[#ECEAE5]/75 hover:text-[#F6F5F2]"
                  )}
                >
                  {isHovered && (
                    <motion.span
                      layoutId={prefersReducedMotion ? undefined : "navbar-hover-indicator"}
                      className="absolute inset-0 rounded-full bg-[rgba(246,245,242,0.14)] border border-[rgba(246,245,242,0.18)] shadow-[0_2px_12px_rgba(0,0,0,0.3)] pointer-events-none"
                      initial={prefersReducedMotion ? { opacity: 0 } : false}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                        mass: 0.8,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:block">
            <FlowButton
              text="Contact chamber"
              href="#contact"
              variant="dark"
              className="!py-2 !px-5 !text-[0.8125rem]"
            />
          </div>

          {/* Mobile Menu Button with smooth icon animation */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-[#F6F5F2] hover:opacity-80 transition-opacity cursor-pointer relative"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" strokeWidth={1.75} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" strokeWidth={1.75} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu & Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
              aria-hidden="true"
            />

            {/* Menu Drawer */}
            <motion.div
              key="mobile-drawer"
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-18 left-3 right-3 z-45 p-5 rounded-[22px] bg-[#0C0C0B]/95 backdrop-blur-2xl border border-[rgba(246,245,242,0.18)] text-[#F6F5F2] shadow-[0_24px_60px_rgba(0,0,0,0.65)] md:hidden"
            >
              <div className="flex flex-col gap-2 text-center">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    custom={index}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.05 + index * 0.04,
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block py-2.5 px-4 rounded-xl text-[1.05rem] font-heading font-medium text-[#ECEAE5] hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.05 + NAV_LINKS.length * 0.04,
                    duration: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pt-2.5 mt-1 border-t border-[rgba(246,245,242,0.12)]"
                >
                  <FlowButton
                    text="Contact chamber"
                    href="#contact"
                    variant="dark"
                    className="w-full justify-center !py-2.5 !text-[0.875rem]"
                    onClick={closeMobileMenu}
                  />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
