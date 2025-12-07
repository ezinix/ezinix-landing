import React from 'react';
import { ArrowRight, ShieldCheck, Truck, BarChart3 } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
            </span>
            Accepting New Bulk Partners
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Renewed. Reliable. <span className="text-brand-purple">Ready.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            India’s trusted B2B platform for bulk supply of premium refurbished laptops. 
            We supply laptops after <span className="text-white font-semibold">32 technical check points</span> to assure the highest quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToForm} className="w-full sm:w-auto text-lg px-8 py-4">
              Get Details <ArrowRight size={20} />
            </Button>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Learn More &darr;
            </a>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
          {[
            { icon: <ShieldCheck className="text-brand-purple" size={32} />, title: "32-Point Check", desc: "Rigorous quality control for every unit." },
            { icon: <Truck className="text-brand-purple" size={32} />, title: "Pan-India Supply", desc: "Reliable logistics across the country." },
            { icon: <BarChart3 className="text-brand-purple" size={32} />, title: "Wholesale Only", desc: "Dedicated to resellers & enterprises." },
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="mb-4 p-3 bg-white/5 rounded-2xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};