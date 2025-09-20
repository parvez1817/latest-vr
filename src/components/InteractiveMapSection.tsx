import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Eye } from 'lucide-react';
import indiaMapImage from '@/assets/india-map.jpg';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';

const InteractiveMapSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const states = [
    {
      name: "Tamil Nadu",
      highlight: "Meenakshi Temple, Bharatanatyam, Ancient Architecture",
      description: "Explore the magnificent Dravidian temples and classical dance forms",
      position: { top: "90%", left: "50%" }
    },
    {
      name: "Rajasthan",
      highlight: "Desert Festivals, Palaces, Folk Music",
      description: "Experience royal heritage and vibrant desert culture",
      position: { top: "30%", left: "35%" }
    },
    {
      name: "Kerala",
      highlight: "Backwaters, Kathakali, Spice Gardens",
      description: "Journey through God's own country and its cultural traditions",
      position: { top: "91%", left: "45%" }
    },
    {
      name: "Maharashtra",
      highlight: "Ajanta Caves, Warli Art, Festivals",
      description: "Discover ancient Buddhist caves and traditional folk art",
      position: { top: "55%", left: "45%" }
    },
    {
      name: "Uttarakhand",
      highlight: "Kedarnath Temple, Himalayan Treks, Spiritual Sites",
      description: "Experience the divine Kedarnath temple and breathtaking Himalayan landscapes",
      position: { top: "25%", left: "50%" }
    }
  ];

  return (
    <section className="py-20 bg-[#1C1917] text-white">
      <div ref={ref} className={`container mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo to-peacock bg-clip-text text-transparent">
              {t('map.title')}
            </span>
            <br />
            <span className="text-foreground">{t('map.subtitle')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('map.description')}
          </p>
        </div>

        {/* Interactive Map */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-cultural border border-border/50">
            <img 
              src={indiaMapImage} 
              alt="Interactive Map of India" 
              className="w-full h-96 lg:h-[600px] object-cover"
            />
            
            {/* State Markers */}
            {states.map((state, index) => (
              <button
                key={index}
                onClick={() => setSelectedState(selectedState === state.name ? null : state.name)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ top: state.position.top, left: state.position.left }}
              >
                <div className="relative">
                  <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                    selectedState === state.name 
                      ? 'bg-saffron border-gold scale-150 shadow-saffron' 
                      : 'bg-peacock border-foreground hover:bg-saffron hover:scale-125'
                  }`}>
                    <MapPin className="w-4 h-4 text-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  
                  {/* State Label */}
                  <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-border text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                    selectedState === state.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    {state.name}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected State Info */}
          {selectedState && (
            <div className="mt-8 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border animate-slide-in-up">
              {states
                .filter(state => state.name === selectedState)
                .map((state, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                      {state.name}
                    </h3>
                    <p className="text-saffron font-medium mb-3">
                      {state.highlight}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {state.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="hero" size="lg">
                        <Eye className="mr-2" size={20} />
                        {t('map.exploreVR')}
                      </Button>
                    
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            {t('map.ready')}
          </p>
          <Button variant="vr" size="lg">
            {t('map.viewComplete')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapSection;
