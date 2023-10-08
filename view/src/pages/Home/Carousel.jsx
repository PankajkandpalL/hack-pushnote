import React, { useState, useEffect } from "react";

const images = [
  "https://nulab.com/static/8c1bca2d1f957f388d979c416d52c090/96943/img_backlog_main-slide1.webp",
  "https://nulab.com/static/2078c6d93f3ac331692f3f539543f5ae/96943/img_backlog_main-slide2.webp",
  "https://nulab.com/static/b986ee1125a35d8473a15150e6424bbc/96943/img_backlog_main-slide3.webp",
  // Add more image URLs as needed
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically transition to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Change slide every 3000 milliseconds (3 seconds)
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative overflow-hidden rounded-md shadow-lg h-96 md:h-96 lg:h-120 w-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
          onClick={goToPrevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
          onClick={goToNextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
