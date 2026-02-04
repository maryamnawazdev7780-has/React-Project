import { useState } from "react";
import CardData from "./CardData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CardSlider = () => {
  const [index, setIndex] = useState(0);

  // Number of cards to show depending on screen width
  const cardsToShow = 3;

  const next = () => {
    if (index < CardData.length - cardsToShow) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="bg-[#f7f8fc] py-16 overflow-hidden text-center">
      <div className="max-w-6xl mx-auto px-4 relative">
         <p className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-blue-950 text-white mt-7">
    News & Blogs

      </p>

      <h2 className="text-4xl font-bold mb-12 text-blue-950">
        Leatest News Feeds
      </h2>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute -left-6 top-1/2 -translate-y-1/2
          w-11 h-11 bg-white rounded-full shadow-lg
          flex items-center justify-center z-10 hover:bg-gray-100"
        >
          <FaArrowLeft />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden mt-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / cardsToShow)}%)`,
            }}
          >
            {CardData.slice(index, index + cardsToShow).map((item) => (
              <div key={item.id} className="flex-none  px-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-56">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{item.date}</span>
                      <span className="text-orange-500 font-semibold cursor-pointer">
                        READ MORE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute -right-6 top-1/2 -translate-y-1/2
          w-11 h-11 bg-white rounded-full shadow-lg
          flex items-center justify-center z-10 hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>

      </div>
    </section>
  );
};

export default CardSlider;
