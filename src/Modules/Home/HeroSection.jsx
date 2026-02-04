import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../../Layout/Header/Header";

const slides = [
  {
    image: "/assets/hero4.png",
    title: "Events, Meetups & Conference",
    desc: "Sed porttitor lectus nibh. Vestibulum ac daim sit amet  quam vehicula lentum sed sit amet quam vehicula dui amet quam  vehicula",
  },
  {
    image: "/assets/hero2.png",
    title: "Global Marketing Meetup Strategies for 2025",
    desc: "Sed porttitor lectus nibh. Vestibulum ac daim sit amet  quam vehicula lentum sed sit amet quam vehicula dui amet quam  vehicula",
  },
  {
    image: "/assets/hero3.png",
    title: "Events, Meetups & Conference",
    desc: "Sed porttitor lectus nibh. Vestibulum ac daim sit amet  quam vehicula lentum sed sit amet quam vehicula dui amet quam  vehicula",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [hoverHero, setHoverHero] = useState(false);

  // Animation states
  const [animateOverlay, setAnimateOverlay] = useState(false);
  const [animateHeading, setAnimateHeading] = useState(false);
  const [animateDesc, setAnimateDesc] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  // Touch positions for swipe
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Reset all animations
  const resetAnimations = () => {
    setAnimateOverlay(false);
    setAnimateHeading(false);
    setAnimateDesc(false);
    setAnimateButton(false);
  };

  // Trigger staggered animation
  const triggerAnimations = () => {
    setAnimateOverlay(true);
    setTimeout(() => setAnimateHeading(true), 500);
    setTimeout(() => setAnimateDesc(true), 1000);
    setTimeout(() => setAnimateButton(true), 1500);
  };

  // Change slide with animation reset
  const changeSlide = (index) => {
    resetAnimations();
    setCurrent(index);
  };

  const nextSlide = () => {
    changeSlide((current + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide(current === 0 ? slides.length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    changeSlide(index);
  };

  // Trigger animations whenever current slide changes
  useEffect(() => {
    const timeout = setTimeout(() => triggerAnimations(), 50);
    return () => clearTimeout(timeout);
  }, [current]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide(); // Swipe left
    } else if (touchEndX - touchStartX > 50) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Header onHover={() => setHoverHero(false)} />

      <div
        className="h-full relative"
        onMouseEnter={() => setHoverHero(true)}
        onMouseLeave={() => setHoverHero(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slider Wrapper */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-blue-950/30" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                {/* Overlay text */}
                <span
                  className={`mb-3 font-semibold lg:mt-20 transition-all duration-700 ease-out
                    ${animateOverlay && current === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                 Event Management Agency
                </span>

                {/* Heading */}
                <h1
                  className={`text-5xl md:text-6xl font-bold max-w-3xl transition-all duration-700 ease-out
                    ${animateHeading && current === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  {slide.title}
                </h1>

                {/* Description */}
                <p
                  className={`mt-6 max-w-2xl text-gray-200 transition-all duration-700 ease-out
                  ${animateDesc && current === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  {slide.desc}
                </p>

                {/* Button (hidden on small screens) */}
                <button
                  className={`mt-8 bg-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-600 transition-all duration-700
                    ${animateButton && current === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                    hidden sm:block`}
                >
                 Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        {((hoverHero && window.innerWidth >= 768) || window.innerWidth >= 640) && (
          <>
            <button
              onClick={prevSlide}
              className="hidden lg:block absolute left-6 rounded-2xl top-1/2 -translate-y-1/2 border border-white text-white p-4 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
            >
              <ChevronLeft size={30} />
            </button>
            <button
              onClick={nextSlide}
              className="hidden lg:block absolute right-6 rounded-xl top-1/2 -translate-y-1/2 border border-white text-white p-4 hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
            >
              <ChevronRight size={30} />
            </button>
          </>
        )}

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? "bg-purple-600 scale-125" : "bg-white/50 hover:bg-purple-400"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
