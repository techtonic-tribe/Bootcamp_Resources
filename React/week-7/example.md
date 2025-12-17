### 1. Practical Coding Example: The Profile Card

Let’s see how we transform a standard HTML structure into a professional UI using only Tailwind classes.

```jsx
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

```

---

### # 2 Coding Example: A "Feature Hero" Section

Once setup is complete, you can build complex layouts. Here is a modern Hero section using Tailwind utilities.

```jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Modern Styling for</span>{' '}
                <span className="block text-indigo-600 xl:inline">React Developers</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Stop fighting with CSS files. Use Tailwind utility classes to build high-performance, beautiful UIs in record time.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;

```

---


---

### 3. Practical Coding Example: The "Brand Identity" Dashboard Card

Let's build a component that uses these custom variables.

**The CSS (`src/index.css`):**

```css
@import "tailwindcss";

@theme {
  --color-primary: #6366f1;
  --color-accent: #f43f5e;
  --spacing-card-p: 2.5rem;
  --font-brand: "Inter", sans-serif;
}

```

**The React Component (`src/components/BrandCard.jsx`):**

```jsx
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

```