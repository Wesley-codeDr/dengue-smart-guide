import React from 'react';

const ModernHero = () => {
  return (
    <section className="modern-hero py-24 md:py-32 text-center relative overflow-hidden">
      {/* ...existing code... */}
      <div className="modern-container relative z-10">
        {/* ...existing code... */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="modern-button-primary flex items-center justify-center text-base px-8 py-4 w-full md:w-auto">
            {/* ...button content... */}
          </button>
          {/* Removed the secondary button as requested */}
          {/* <button className="modern-button-secondary flex items-center justify-center text-base px-8 py-4 w-full md:w-auto">
              ...button content...
          </button> */}
        </div>
        {/* ...existing code... */}
      </div>
      {/* ...existing code... */}
    </section>
  );
};

export default ModernHero;
