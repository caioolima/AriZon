import React from 'react';

const EventBanner = ({ bannerUrl, title }) => (
  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-lg mb-8">
    <img
      src={bannerUrl || 'https://via.placeholder.com/1200x600'}
      alt={title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
    <h1 className="absolute bottom-4 left-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
      {title}
    </h1>
  </div>
);

export default EventBanner;
