import React from "react";
import { events } from "./EventData";

const EventMarquee = () => {
  return (
    <>
      {/* inline css (component ke andar hi) */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            animation: marquee 7s linear infinite;
          }
          .marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="overflow-hidden py-16 h-auto">
        <div className="flex items-center justify-center gap-3  pb-4">
  {/* Left Triangle */}
  <div className="w-0 h-0 
    border-t-[8px] border-t-transparent
    border-b-[8px] border-b-transparent
    border-r-[12px] border-r-black">
  </div>

  {/* Text */}
  <h2 className="text-purple-600 font-semibold text-xl">
    Upcoming Events
  </h2>

  {/* Right Triangle */}
  <div className="w-0 h-0 
    border-t-[8px] border-t-transparent
    border-b-[8px] border-b-transparent
    border-l-[12px] border-l-black">
  </div>
</div>
  <h1 className="flex text-center justify-center pb-14 text-3xl">Explore Our Next Upcoming Awesome Events</h1>


        <div className="flex gap-6 marquee">
          
          {[...events, ...events].map((event, index) => (
            <div
              key={index}
              className="min-w-[420px] bg-white rounded-2xl shadow-md relative"
            >
              {/* image */}
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-40 object-cover rounded-t-2xl"
              />

              {/* date */}
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold">
                {event.date}
              </div>

              {/* content */}
              <div className="p-5">
                <p className="text-sm text-gray-950 mb-2">
                   {event.time} &nbsp;  {event.location}
                </p>

                <h3 className="text-lg font-bold mb-3">
                  {event.title}
                </h3>

                <div className="flex items-center justify-between">
                  <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-full text-sm hover:bg-purple-600 hover:text-white transition">
                    Tickets & Details
                  </button>

                  <p className="font-semibold">
                    Price:{" "}
                    <span className="text-purple-600">{event.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventMarquee;
