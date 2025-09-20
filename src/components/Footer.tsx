import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const quickLinks = [
    { nameKey: 'footer.aboutUs', href: '#about' },
    { nameKey: 'footer.features', href: '#discover' },
    { nameKey: 'footer.partners', href: '#contact' },
    { nameKey: 'footer.privacy', href: '#' },
    { nameKey: 'footer.terms', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer ref={ref} className={`bg-card/30 border-t border-border transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-saffron to-indigo rounded-full"></div>
              <span className="text-xl font-playfair font-bold text-foreground">
                Cultural Chronicles
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">{t('footer.stayUpdated')}</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder={t('footer.emailPlaceholder')}
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron"
                />
                <Button variant="cultural" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  {t('footer.subscribe')}
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-saffron transition-colors duration-200"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.connect')}</h4>
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:hello@bharatvr.com"
                className="block text-muted-foreground hover:text-saffron transition-colors"
              >
                culturalchronicles@gmail.com
              </a>
              <a 
                href="tel:+911234567890"
                className="block text-muted-foreground hover:text-saffron transition-colors"
              >
                +91 9500785279
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-saffron hover:border-saffron transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>{t('footer.madeWith')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
