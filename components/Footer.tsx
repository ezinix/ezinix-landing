import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { WHATSAPP_CHANNEL_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">EZINIX</h2>
            <p className="text-sm text-gray-500">32-Point Tested • Business-Grade Quality</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
          <p>© 2025 Ezinix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};