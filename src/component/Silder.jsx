import React, { useEffect, useState } from "react";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

export default function Slider() {
  const images = [s1, s2];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Go to selected slide
  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="w-full px-2 py-6 sm:px-4 sm:py-8 md:py-10">
      <div
        className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-xl shadow-lg"
        aria-label="Image slider"
      >
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="
                relative
                h-45
                min-w-full
                xs:h-[200px]
                sm:h-70
                md:h-95
                lg:h-120
                xl:h-130
              "
            >
              <img
                src={image}
                alt={`Dashmesh Industry banner ${index + 1}`}
                className="block h-full w-full object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="
              absolute
              left-2
              top-1/2
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/50
              text-sm
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/75
              focus:outline-none
              focus:ring-2
              focus:ring-white
              sm:left-4
              sm:h-10
              sm:w-10
              sm:text-base
              md:h-11
              md:w-11
              md:text-lg
            "
          >
            <span aria-hidden="true">❮</span>
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              absolute
              right-2
              top-1/2
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/50
              text-sm
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/75
              focus:outline-none
              focus:ring-2
              focus:ring-white
              sm:right-4
              sm:h-10
              sm:w-10
              sm:text-base
              md:h-11
              md:w-11
              md:text-lg
            "
          >
            <span aria-hidden="true">❯</span>
          </button>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div
            className="
              absolute
              bottom-3
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-2
              rounded-full
              bg-black/30
              px-3
              py-2
              backdrop-blur-sm
              sm:bottom-4
            "
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={current === index ? "true" : "false"}
                className={`
                  rounded-full
                  transition-all
                  duration-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white
                  ${
                    current === index
                      ? "h-2.5 w-6 bg-white"
                      : "h-2.5 w-2.5 bg-white/50 hover:bg-white/80"
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
