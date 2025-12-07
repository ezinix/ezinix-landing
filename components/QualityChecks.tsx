import React from 'react';
import { 
  Cpu, Battery, Monitor, Wifi, 
  Keyboard, HardDrive, Speaker, Camera,
  CheckCircle2
} from 'lucide-react';

export const QualityChecks: React.FC = () => {
  const checks = [
    { Icon: Cpu, label: "Performance Stress Test" },
    { Icon: Battery, label: "Battery Health > 80%" },
    { Icon: Monitor, label: "Display & Dead Pixels" },
    { Icon: Wifi, label: "Ports & Connectivity" },
    { Icon: Keyboard, label: "Keyboard & Trackpad" },
    { Icon: HardDrive, label: "BIOS & Hardware ID" },
    { Icon: Speaker, label: "Audio System" },
    { Icon: Camera, label: "Webcam & Mic" },
  ];

  return (
    <section id="quality" className="scroll-mt-24 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            32-Point Quality Assurance
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don't just wipe data. Every device undergoes a rigorous 32-point inspection process 
            by our certified technicians to ensure it meets business-grade standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {checks.map((check, idx) => (
            <div key={idx} className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-brand-purple/10 hover:border-brand-purple/50 transition-all duration-300">
              <div className="mb-4 text-brand-purple group-hover:scale-110 transition-transform duration-300">
                <check.Icon size={32} />
              </div>
              <h3 className="text-white font-medium">{check.label}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-brand-gray text-sm bg-black/40 px-6 py-3 rounded-full border border-white/5">
            <CheckCircle2 size={16} className="text-brand-purple" />
            <span>Plus 24 other cosmetic and hardware functionality checks</span>
          </div>
        </div>
      </div>
    </section>
  );
};