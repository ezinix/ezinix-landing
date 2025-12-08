import React from 'react';

export const Brands: React.FC = () => {
  const brands = [
    "Dell", "HP", "Lenovo", "Asus", "Acer", "Apple", "Redmi"
  ];

  return (
    <section id="brands" className="scroll-mt-24 py-16 border-y border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-10">
          Trusted Brands We Supply
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70">
          {brands.map((brand, idx) => (
            <div key={idx} className="text-3xl md:text-4xl font-sans font-bold tracking-wider text-gray-400 hover:text-white transition-colors cursor-default select-none">
              {brand}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-10 text-sm">
          And all major laptop brands available in India
        </p>
      </div>
    </section>
  );
};
