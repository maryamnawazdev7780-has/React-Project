import React from "react";

export default function EventHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden mt-20">

      {/* Background Video */}
      <iframe
        className="absolute inset-0 w-full h-full scale-125"
        src="https://www.youtube.com/embed/vhnRfKn04bo?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=vhnRfKn04bo"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div className="text-white">
          <div className="flex items-center gap-3 mb-6">
            
            
            <span className="uppercase text-sm tracking-wide">
              See And Discover
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Know More About Eventino <br />
            For Better Experience
          </h1>
        </div>

        {/* Right Form */}
        <div className="bg-purple-600 rounded-3xl p-10 lg:mt-16">
          <h2 className="text-white text-3xl font-bold mb-2">
            Register Now
          </h2>
          <p className="text-white/80 mb-8">Make A Booking</p>

          <form className="space-y-5">
            <input className="w-full px-6 py-4 rounded-full" placeholder="Full Name" />
            <input className="w-full px-6 py-4 rounded-full" placeholder="Email Address" />
            <input className="w-full px-6 py-4 rounded-full" placeholder="Phone Number" />
            <button className="w-full bg-white text-purple-700 py-4 rounded-full font-semibold">
              Submit Now
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
