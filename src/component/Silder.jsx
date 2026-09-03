import React, { useCallback, useEffect, useMemo, useState } from "react";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

export default function Slider() {
  const images = useMemo(() => [s1, s2], []);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = images.length;

  // Go to next slide
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Go to specific slide
  const goToSlide = useCallback((index) => {
    setCurrent(index);
  }, []);

  // Auto slide
  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    const interval = setInterval(nextSlide, 4000);

    return () => clearInterval(interval);
  }, [nextSlide, totalSlides, isPaused]);

  // Keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prevSlide();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextSlide();
    }
  };

  if (!images.length) return null;

  return (
    <section
      className="w-full px-2 py-5 sm:px-4 sm:py-8 md:py-10"
      aria-label="Dashmesh Industry image slider"
    >
      <div
        className="
          group
          relative
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-lg
          bg-gray-100
          shadow-lg
          sm:rounded-xl
          md:shadow-xl
        "
        role="region"
        aria-roledescription="carousel"
        aria-label="Dashmesh Industry banners"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div
          className="
            flex
            transition-transform
            duration-700
            ease-in-out
            will-change-transform
          "
          style={{
            transform: `translate3d(-${current * 100}%, 0, 0)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="
                relative
                h-[180px]
                min-w-full
                xs:h-[210px]
                sm:h-[280px]
                md:h-[380px]
                lg:h-[480px]
                xl:h-[520px]
              "
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${totalSlides}`}
              aria-hidden={current !== index}
            >
              <img
                src={image}
                alt={`Dashmesh Industry banner ${index + 1}`}
                className="
                  block
                  h-full
                  w-full
                  select-none
                  object-cover
                "
                draggable={false}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />

              {/* Optional dark overlay for better visual depth */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-transparent
                "
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        {totalSlides > 1 && (
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="
              absolute
              left-2
              top-1/2
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/45
              text-lg
              text-white
              opacity-90
              shadow-md
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
              md:h-12
              md:w-12
              md:text-xl
              md:opacity-0
              md:group-hover:opacity-100
            "
          >
            <span aria-hidden="true">❮</span>
          </button>
        )}

        {/* Next Button */}
        {totalSlides > 1 && (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              absolute
              right-2
              top-1/2
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/45
              text-lg
              text-white
              opacity-90
              shadow-md
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
              md:h-12
              md:w-12
              md:text-xl
              md:opacity-0
              md:group-hover:opacity-100
            "
          >
            <span aria-hidden="true">❯</span>
          </button>
        )}

        {/* Dots */}
        {totalSlides > 1 && (
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
              bg-black/35
              px-3
              py-2
              shadow-sm
              backdrop-blur-md
              sm:bottom-5
            "
            role="tablist"
            aria-label="Select slide"
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={current === index}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white
                  focus:ring-offset-1
                  focus:ring-offset-black/30
                  ${
                    current === index
                      ? "w-7 bg-white"
                      : "w-2 bg-white/50 hover:w-4 hover:bg-white/80"
                  }
                `}
              />
            ))}
          </div>
        )}

        {/* Slide counter */}
        {totalSlides > 1 && (
          <div
            className="
              absolute
              right-3
              top-3
              rounded-full
              bg-black/40
              px-3
              py-1
              text-xs
              font-medium
              text-white
              backdrop-blur-sm
              sm:right-4
              sm:top-4
              sm:text-sm
            "
            aria-live="polite"
          >
            {current + 1} / {totalSlides}
          </div>
        )}
      </div>
    </section>
  );
}
