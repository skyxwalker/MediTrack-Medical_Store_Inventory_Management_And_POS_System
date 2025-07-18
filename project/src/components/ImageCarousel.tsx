import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Updated with 12 screenshots for medical/pharmacy themes
  const screenshots = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Admin Dashboard',
      description: 'Comprehensive analytics and system overview'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Inventory Management',
      description: 'Real-time stock tracking and management'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'POS System',
      description: 'Streamlined point-of-sale interface'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Staff Management',
      description: 'Role-based access and staff monitoring'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Vendor Management',
      description: 'Comprehensive vendor relationship management'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Customer Profiles',
      description: 'Customer management and purchase history'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Sales Reports',
      description: 'Detailed sales analytics and reporting'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Medicine Catalog',
      description: 'Complete medicine database with details'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Order Processing',
      description: 'Streamlined order management system'
    },
    {
      id: 10,
      url: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Stock Alerts',
      description: 'Low stock notifications and reorder alerts'
    },
    {
      id: 11,
      url: 'https://images.pexels.com/photos/4021777/pexels-photo-4021777.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Prescription Management',
      description: 'Digital prescription handling and storage'
    },
    {
      id: 12,
      url: 'https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Financial Overview',
      description: 'Revenue tracking and financial insights'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
      {/* Main Image Display - Made bigger */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={screenshots[currentIndex].url}
              alt={screenshots[currentIndex].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay with info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6 md:p-8">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                {screenshots[currentIndex].title}
              </h3>
              <p className="text-white/90 text-sm sm:text-base md:text-lg">
                {screenshots[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-2 sm:p-3 hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-2 sm:p-3 hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 scale-125 shadow-lg' 
                : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Thumbnail Preview Grid - Made wider */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10">
        {screenshots.map((screenshot, index) => (
          <motion.button
            key={screenshot.id}
            onClick={() => goToSlide(index)}
            className={`relative aspect-video rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 ${
              index === currentIndex 
                ? 'ring-4 ring-blue-600 shadow-xl scale-105' 
                : 'hover:scale-105 hover:shadow-lg'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={screenshot.url}
              alt={screenshot.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600/20' 
                : 'bg-black/40 hover:bg-black/20'
            }`} />
            {/* Title overlay for thumbnails */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1 sm:p-2">
              <p className="text-white text-xs font-medium truncate hidden sm:block">
                {screenshot.title}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;