import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageDropdown = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as Language, name: 'English', nativeName: 'English' },
    { code: 'ta' as Language, name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'ml' as Language, name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'te' as Language, name: 'Telugu', nativeName: 'తెలుగు' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
    
    // Add smooth transition effect to body
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    document.body.style.opacity = '0.8';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 150);
  };

  return (
    <div className="relative">
      <Button
        variant="cultural"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-saffron/20 flex items-center gap-2"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{t('header.language')}</span>
        <span className="sm:hidden">{currentLanguage?.nativeName}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-xl border border-border/50 rounded-lg shadow-2xl shadow-primary/10 z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left hover:bg-saffron/10 transition-all duration-200 flex items-center justify-between group ${
                  language === lang.code 
                    ? 'bg-saffron/20 text-saffron border-l-2 border-saffron' 
                    : 'text-foreground hover:text-saffron'
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{lang.nativeName}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-saffron/70">
                    {lang.name}
                  </span>
                </div>
                {language === lang.code && (
                  <div className="w-2 h-2 bg-saffron rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageDropdown;