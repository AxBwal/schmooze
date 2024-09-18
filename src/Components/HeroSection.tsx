import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">

        <div className='flex items-center justify-center gap-12 mb-60'>
          <div className="max-w-2xl text-left">
            <h1 className="text-6xl font-bold mb-4 text-purple-400 leading-tight">
              Swipe memes,<br />not people
            </h1>
            <p className="text-xl mb-6 text-gray-300">
              The World's First Meme-Based Dating App
            </p>
            <button className="bg-black text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-800 transition duration-300">
              Download Now
            </button>
          </div>

          <div className="relative">
            <img
              src="https://schmooze.in/static/app_hero-6960a927c5931db9b3cd22788eea0af5.webp"
              alt="App Screenshot"
              className="w-96 h-auto rounded-3xl transform rotate-6 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
