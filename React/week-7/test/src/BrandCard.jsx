import React from 'react';

const BrandCard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      {/* Using custom spacing 'card-p' and custom color 'primary' */}
      <div className="bg-white p-card-p rounded-3xl shadow-2xl border-t-4 border-primary max-w-md">
        
        <span className="text-accent font-bold tracking-widest text-xs uppercase">
          New Feature
        </span>
        
        <h2 className="mt-2 text-3xl font-brand font-extrabold text-gray-900">
          Customized Identity
        </h2>
        
        <p className="mt-4 text-gray-600 leading-relaxed">
          This card doesn't use standard Tailwind values. It uses our 
          <span className="font-bold text-primary"> Brand Tokens</span> defined in the CSS theme block.
        </p>
        
        <button className="mt-8 w-full bg-primary hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default BrandCard;