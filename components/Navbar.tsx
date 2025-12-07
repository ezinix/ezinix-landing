import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    form?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Text with Custom Sifonn Font */}
          <div 
            className="flex-shrink-0 cursor-pointer select-none mt-3" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-sifonn text-4xl text-brand-purple tracking-wide">
              EZINIX
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-brand-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button onClick={scrollToForm} className="py-2 px-6 text-sm">
              Get Details
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-brand-purple block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button onClick={scrollToForm} fullWidth>
                Get Details
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
