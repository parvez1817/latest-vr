import React from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad2, GraduationCap, Users, Star } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';


const DualPurposeSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-20 bg-gradient-to-r from- to-[#FF7A00] text-white">
      <div ref={ref} className={`container mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-peacock to-saffron bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Entertainment Column */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Gamepad2 className="w-8 h-8 text-saffron mr-3" />
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground">
                  {t('about.entertainment')}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                {t('about.entertainment.desc')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-saffron/20">
                <Star className="w-6 h-6 text-saffron mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('about.tourism')}</h4>
                  <p className="text-muted-foreground">{t('about.tourism.desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-saffron/20">
                <Star className="w-6 h-6 text-saffron mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('about.gamified')}</h4>
                  <p className="text-muted-foreground">{t('about.gamified.desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-saffron/20">
                <Star className="w-6 h-6 text-saffron mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('about.roleplay')}</h4>
                  <p className="text-muted-foreground">{t('about.roleplay.desc')}</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full lg:w-auto">
              {t('about.startAdventure')}
            </Button>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <GraduationCap className="w-8 h-8 text-indigo mr-3" />
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground">
                  {t('about.education')}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg mb-6">
                {t('about.education.desc')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-white/20">
                <Users className="w-6 h-6 text-indigo mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('about.narration')}</h4>
                  <p className="text-muted-foreground">{t('about.narration.desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-white/20">
                <Users className="w-6 h-6 text-indigo mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('about.facts')}</h4>
                  <p className="text-muted-foreground">{t('about.facts.desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-card/30 rounded-lg border border-white/20">
                <Users className="w-6 h-6 text-indigo mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{t('about.classroom')}</h4>
                  <p className="text-muted-foreground">{t('about.classroom.desc')}</p>
                </div>
              </div>
            </div>

            <Button variant="vr" size="lg" className="w-full lg:w-auto">
              {t('about.exploreLearning')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPurposeSection;