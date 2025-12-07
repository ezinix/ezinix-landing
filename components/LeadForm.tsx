import React, { useState } from 'react';
import { Send, CheckCircle, Smartphone } from 'lucide-react';
import { Button } from './Button';
import { GOOGLE_SCRIPT_URL, WHATSAPP_CHANNEL_URL } from '../constants';
import { FormData, FormStatus } from '../types';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    businessName: '',
    gstNumber: '',
    location: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.businessName || !formData.location) return false;
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    // Simple GST format check (15 chars usually) - optional strictness
    if (formData.gstNumber && formData.gstNumber.length < 15) {
       // Allow submission but warn? Or strictly enforce? enforcing length 15 for standard GSTIN
       if(formData.gstNumber.length !== 15) {
           alert("Please enter a valid 15-character GST Number.");
           return false;
       }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ ...status, submitting: true, error: null });

    try {
      // Create FormData object for Google Apps Script
      const data = new URLSearchParams();
      data.append('timestamp', new Date().toISOString());
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      data.append('businessName', formData.businessName);
      data.append('gst', formData.gstNumber);
      data.append('location', formData.location);

      // Using mode: 'no-cors' because Google Apps Script Web Apps often have CORS issues 
      // when called from client-side JS. The tradeoff is we can't read the response JSON,
      // but the data will be submitted successfully.
      if (GOOGLE_SCRIPT_URL.includes("PLACEHOLDER")) {
        // Simulation for development if URL not set
        console.warn("Google Script URL is placeholder. Simulating success.");
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: data,
          mode: 'no-cors' // Critical for simple HTML form submissions to GAS
        });
      }

      setStatus({ submitted: true, submitting: false, error: null });
    } catch (error) {
      console.error("Form error:", error);
      setStatus({ 
        submitted: false, 
        submitting: false, 
        error: "Something went wrong. Please try contacting us directly via WhatsApp." 
      });
    }
  };

  if (status.submitted) {
    return (
      <div className="bg-white/5 border border-brand-purple rounded-2xl p-8 md:p-12 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-500 mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300 mb-8">
          Your details have been received successfully.
        </p>
        
        <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/10">
          <p className="text-sm text-gray-400 mb-4">
            Join our exclusive WhatsApp Channel for daily stock updates, pricing & availability.
          </p>
          <a 
            href={WHATSAPP_CHANNEL_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
          >
            <Smartphone size={24} />
            Join WhatsApp Channel
          </a>
        </div>
      </div>
    );
  }

  return (
    <section id="lead-form" className="scroll-mt-24 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Partner With Us</h2>
            <p className="text-gray-400">Fill the form below to access our wholesale price list.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  placeholder="10-digit mobile number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="businessName" className="text-sm font-medium text-gray-300">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                placeholder="Your Company Name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="gstNumber" className="text-sm font-medium text-gray-300">GST Number</label>
                <input
                  type="text"
                  id="gstNumber"
                  name="gstNumber"
                  required
                  value={formData.gstNumber}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  placeholder="GSTIN"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium text-gray-300">City / State</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  placeholder="e.g. New Delhi"
                />
              </div>
            </div>

            {status.error && (
              <p className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded">
                {status.error}
              </p>
            )}

            <Button 
              type="submit" 
              fullWidth 
              disabled={status.submitting}
              className="mt-4"
            >
              {status.submitting ? 'Submitting...' : 'Get Details'}
              {!status.submitting && <Send size={18} />}
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting this form, you agree to receive stock updates via WhatsApp/SMS.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};