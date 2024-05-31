import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  useEffect(() => {
    const carousel = document.querySelector("#default-carousel");
    const items = carousel.querySelectorAll("[data-carousel-item]");
    const totalItems = items.length;
    let currentIndex = 0;

    const updateCarousel = () => {
      items.forEach((item, index) => {
        item.classList.toggle("block", index === currentIndex);
        item.classList.toggle("hidden", index !== currentIndex);
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
    };

    const nextButton = carousel.querySelector("[data-carousel-next]");
    const prevButton = carousel.querySelector("[data-carousel-prev]");

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    if (nextButton && prevButton) {
      nextButton.addEventListener("click", nextSlide);
      prevButton.addEventListener("click", prevSlide);
    }

    
    updateCarousel();

    
    const autoSlideInterval = setInterval(nextSlide, 3000);

   
    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener("click", nextSlide);
        prevButton.removeEventListener("click", prevSlide);
      }
      clearInterval(autoSlideInterval);
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto m-4">
      <div id="default-carousel" className="relative" data-carousel="static">
        <div className="overflow-hidden relative h-56 sm:h-64 xl:h-80 2xl:h-96">
          <div className="block duration-700 ease-in-out" data-carousel-item>
            <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
              First Slide
            </span>
            <img
              src="/images/slider1.jpg"
              className="block absolute top-0 left-0 w-full h-full object-contain"
              alt="Slide 1"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/images/slider2.png"
              className="block absolute top-0 left-0 w-full h-full object-contain"
              alt="Slide 2"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/images/slider3.jpg"
              className="block absolute top-0 left-0 w-full h-full object-contain"
              alt="Slide 3"
            />
          </div>
        </div>
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <FaArrowLeft className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <FaArrowRight className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
