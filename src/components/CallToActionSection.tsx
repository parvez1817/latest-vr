import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Users, Clock, ArrowRight } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';

const CallToActionSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-saffron via-gold to-indigo bg-clip-text text-transparent">
              {t('cta.title')}
            </span>
            <br />
            <span className="text-foreground">{t('cta.subtitle')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('cta.description')}
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4 font-semibold group"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              {t('cta.download')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              variant="vr"
              size="lg"
              className="text-lg px-8 py-4 font-semibold"
            >
              {t('cta.tryVR')}
            </Button>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 sm:p-12 relative overflow-hidden"
               style={{
                 backgroundImage: `url('/src/assets/logo.jpg')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
               }}>
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-card/80 backdrop-blur-[2px]"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <Users className="w-12 h-12 text-peacock mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4">
                  {t('cta.partnership.title')}
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  {t('cta.partnership.desc')}
                </p>
                <Button variant="cultural" size="lg" className="font-semibold">
                  {t('cta.partner')}
                </Button>
              </div>

              {/* Features for Institutions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-saffron" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{t('cta.quickSetup')}</h4>
                  <p className="text-muted-foreground text-saffron">{t('cta.quickSetup.desc')}</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-saffron" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{t('cta.groupSessions')}</h4>
                  <p className="text-muted-foreground text-saffron">{t('cta.groupSessions.desc')}</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Download className="w-8 h-8 text-saffron" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{t('cta.customContent')}</h4>
                  <p className="text-muted-foreground text-saffron">{t('cta.customContent.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`mt-16 text-center transition-all duration-1000 ease-out delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-muted-foreground mb-4">
            {t('cta.questions')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@bharatvr.com"
              className="text-saffron hover:text-saffron-light transition-colors font-medium"
            >
              culturalchronicles@gmail.com
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <a
              href="tel:+911234567890"
              className="text-saffron hover:text-saffron-light transition-colors font-medium"
            >
              +91 9500785279
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
