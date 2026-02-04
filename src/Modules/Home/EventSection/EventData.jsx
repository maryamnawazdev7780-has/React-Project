import React from "react";

export const events = [
  {
    date: "20 January",
    title: "Happy New Year Reunion And Music Festival",
    time: "08:00am - 22:00pm",
    location: "245x Town 1214 Street, US",
    price: "$199",
    img: "/assets/hero3.png",
  },
  {
    date: "22 January",
    title: "Live Concert Night",
    time: "06:00pm - 11:00pm",
    location: "Downtown Street, US",
    price: "$149",
    img: "/assets/hero2.png",
  },
  {
    date: "25 January",
    title: "DJ Party Festival",
    time: "07:00pm - 12:00am",
    location: "City Hall, US",
    price: "$99",
    img: "/assets/hero4.png",
  },
];

const EventData = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>

      {/* Marquee Container */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee gap-6">
          {events.concat(events).map((event, index) => (
            <div
              key={index}
              className="min-w-[300px] border rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-500">
                {event.date} | {event.time}
              </p>
              <p className="text-gray-500">{event.location}</p>
              <p className="mt-2 font-bold">{event.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventData;
