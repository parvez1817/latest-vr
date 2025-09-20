import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-vr-india.jpg';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const scrollToDiscover = () => {
    const element = document.getElementById('discover');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="VR India Cultural Experience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80"></div>
        <div className="absolute inset-0 mandala-pattern opacity-20"></div>
      </div>

      {/* Content */}
      <div ref={ref} className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible ? 'animate-on-scroll' : ''}`}>
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-saffron via-gold to-indigo bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
            <br />
            <span className="text-foreground text-3xl sm:text-4xl lg:text-5xl mt-2 block">
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToDiscover}
              className="text-lg px-8 py-4 font-semibold"
            >
              {t('hero.startJourney')}
            </Button>
            <Button 
              variant="vr" 
              size="lg"
              className="text-lg px-8 py-4 font-semibold"
            >
              <Play className="mr-2" size={20} />
              {t('hero.watchDemo')}
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-saffron/20 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-16 w-12 h-12 bg-indigo/20 rounded-full animate-float delay-1000 opacity-60"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-peacock/20 rounded-full animate-float delay-2000 opacity-60"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToDiscover}
          className="text-foreground/60 hover:text-saffron transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;