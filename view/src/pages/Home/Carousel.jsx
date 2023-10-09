// import React, { useState, useEffect } from "react";

// const images = [
//   "https://nulab.com/static/8c1bca2d1f957f388d979c416d52c090/96943/img_backlog_main-slide1.webp",
//   "https://nulab.com/static/2078c6d93f3ac331692f3f539543f5ae/96943/img_backlog_main-slide2.webp",
//   "https://nulab.com/static/b986ee1125a35d8473a15150e6424bbc/96943/img_backlog_main-slide3.webp",
//   // Add more image URLs as needed
// ];

// export const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to the next slide
//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to go to the previous slide
//   const goToPrevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   // Automatically transition to the next slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(goToNextSlide, 3000); // Change slide every 3000 milliseconds (3 seconds)
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="w-full h-full max-w-screen-xl mx-auto">
//       <div className="relative overflow-hidden rounded-md shadow-lg">
//         <img
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           className="w-full h-96 object-cover md:h-96 lg:h-120"
//         />
//         <button
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
//           onClick={goToPrevSlide}
//         >
//           &lt;
//         </button>
//         <button
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
//           onClick={goToNextSlide}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl" autoplay={true} loop={true}>
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
