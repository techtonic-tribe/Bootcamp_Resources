import React from 'react';

const ProfileCard = () => {
  return (
    // Container: White background, rounded corners, shadow, and centered padding
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 border border-gray-100">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:shrink-0">
          <img 
            className="h-48 w-full object-cover md:h-full md:w-48" 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" 
            alt="User profile" 
          />
        </div>
        
        {/* Content Section */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Full-Stack Developer
          </div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Alex Thompson
          </a>
          <p className="mt-2 text-slate-500">
            Specializing in React, Tailwind, and Node.js. Building scalable web applications with a focus on user experience.
          </p>
          
          {/* Action Button */}
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;