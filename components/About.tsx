import React from 'react';
import { Briefcase, Users, Globe2, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Built for Business Growth</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                At <span className="text-brand-purple font-bold">EZINIX</span>, we don't just sell laptops; we empower businesses. 
                We specialize exclusively in the B2B wholesale market, providing premium refurbished laptops to resellers, 
                corporate offices, and educational institutions.
              </p>
              <p>
                Our inventory consists of high-grade commercial series laptops from top global brands. 
                Unlike retail-focused sellers, our processes are optimized for bulk orders, ensuring consistency, 
                quality, and competitive pricing for our partners.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: "B2B Exclusive", icon: <Briefcase size={20} /> },
                { label: "Bulk Orders Only", icon: <Layers size={20} /> },
                { label: "Reseller Focused", icon: <Users size={20} /> },
                { label: "Pan-India Delivery", icon: <Globe2 size={20} /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white font-medium">
                  <div className="text-brand-purple">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand-purple/20 blur-3xl rounded-full" />
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Inquire</h3>
                    <p className="text-gray-400 text-sm">Fill out the form to request our latest stock list.</p>
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-white/10 ml-5" />
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Select</h3>
                    <p className="text-gray-400 text-sm">Choose from our wide range of tested devices.</p>
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-white/10 ml-5" />
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Receive</h3>
                    <p className="text-gray-400 text-sm">Fast, secure shipping to your business location.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};