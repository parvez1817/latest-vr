import React from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { useLanguage } from '@/contexts/LanguageContext';

const plans = [
  {
    nameKey: 'pricing.individual',
    price: '₹299/month or ₹2,990/year',
    features: [
      'Unlimited VR access to Tamil Nadu monuments & culture',
      'Festival showcase',
      'Guided narration',
    ],
  },
  {
    nameKey: 'pricing.family',
    price: '₹799/month or ₹7,990/year (up to 4 users)',
    features: [
      'Everything in Individual',
      'Shared profiles',
      'Kid-friendly cultural stories',
    ],
    popular: true,
  },
  {
    nameKey: 'pricing.institutional',
    price: '₹25,000/year',
    features: [
      'Classroom access',
      'Teacher dashboard',
      'Student logins',
      'Assessment tools',
    ],
  },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="pricing"
      ref={ref}
      className={`relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-700 via-blue-800 to-gray-600 text-white overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Minimal Tamil Nadu cultural motifs background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-600 to-blue-700 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tr from-gray-700 to-yellow-800 rounded-full mix-blend-multiply animate-float delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading & Intro */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-lg max-w-xl mx-auto text-gray-200">
            {t('pricing.description')}
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-xl shadow-lg transform transition-transform duration-300 bg-gradient-to-br ${
                plan.popular
                  ? 'from-blue-700 to-blue-900 shadow-blue-500 hover:shadow-blue-700 scale-105 z-10'
                  : 'from-yellow-700 to-yellow-900 hover:shadow-yellow-500'
              } hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                  {t('pricing.mostPopular')}
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{t(plan.nameKey)}</h3>
              <p className="text-xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2 list-disc list-inside text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-md bg-gradient-to-r from-yellow-500 to-blue-600 hover:from-yellow-600 hover:to-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                onClick={() => alert(`Subscribed to ${t(plan.nameKey)}`)}
              >
                {t('pricing.subscribe')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
