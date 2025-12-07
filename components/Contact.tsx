import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-20 border-t border-white/5 bg-gradient-to-b from-[#131524] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400">Reach out for bulk inquiries or visit our warehouse.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/5 hover:border-brand-purple/50 transition-colors">
            <div className="w-12 h-12 bg-brand-purple/20 rounded-full flex items-center justify-center text-brand-purple mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Address</h3>
            <p className="text-gray-400 text-sm">{CONTACT_INFO.address}</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/5 hover:border-brand-purple/50 transition-colors">
            <div className="w-12 h-12 bg-brand-purple/20 rounded-full flex items-center justify-center text-brand-purple mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 text-sm hover:text-white transition-colors">
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/5 hover:border-brand-purple/50 transition-colors">
            <div className="w-12 h-12 bg-brand-purple/20 rounded-full flex items-center justify-center text-brand-purple mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-400 text-sm hover:text-white transition-colors">
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};