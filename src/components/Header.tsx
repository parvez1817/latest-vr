import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageDropdown from '@/components/LanguageDropdown';

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/10' : 'bg-background/20 backdrop-blur-md'}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 hover:scale-105">
          <img
            src="/ima.jpg"
            alt="Cultural Chronicles Logo"
            className="w-12 h-12 rounded-full object-cover transition-all duration-300 group-hover:shadow-lg group-hover:shadow-saffron/30"
          />
          <span className="text-xl font-playfair font-bold text-foreground transition-all duration-300 group-hover:text-saffron">
            Cultural Chronicles
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <LanguageDropdown />
          <button onClick={() => scrollToSection('discover')} className="text-foreground hover:text-saffron transition-all duration-300 font-medium relative hover:scale-105 hover:-translate-y-0.5">
            {t('header.discover')}
          </button>
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-saffron transition-all duration-300 font-medium relative hover:scale-105 hover:-translate-y-0.5">
            {t('header.about')}
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-saffron transition-all duration-300 font-medium relative hover:scale-105 hover:-translate-y-0.5">
            {t('header.pricing')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-saffron transition-all duration-300 font-medium relative hover:scale-105 hover:-translate-y-0.5">
            {t('header.contact')}
          </button>
          <button className="bg-peacock text-foreground hover:bg-peacock-light border border-gold/20 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-saffron/20">
            {t('header.tryVR')}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground hover:text-saffron transition-all duration-300 hover:scale-110 hover:bg-saffron/10 rounded-lg">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/10">
        <nav className="flex flex-col space-y-4 p-6">
          <div className="pb-2 border-b border-border/30">
            <LanguageDropdown />
          </div>
          <button onClick={() => scrollToSection('discover')} className="text-left text-foreground hover:text-saffron transition-all duration-300 font-medium hover:translate-x-2 hover:bg-saffron/5 p-2 rounded-lg -m-2">
            {t('header.discover')}
          </button>
          <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-saffron transition-all duration-300 font-medium hover:translate-x-2 hover:bg-saffron/5 p-2 rounded-lg -m-2">
            {t('header.about')}
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-left text-foreground hover:text-saffron transition-all duration-300 font-medium hover:translate-x-2 hover:bg-saffron/5 p-2 rounded-lg -m-2">
            {t('header.pricing')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-saffron transition-all duration-300 font-medium hover:translate-x-2 hover:bg-saffron/5 p-2 rounded-lg -m-2">
            {t('header.contact')}
          </button>
          <button className="self-start bg-peacock text-foreground hover:bg-peacock-light border border-gold/20 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-saffron/20">
            {t('header.tryVR')}
          </button>
        </nav>
      </div>}
    </div>
  </header>;
};
export default Header;