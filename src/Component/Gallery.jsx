import React from "react";

function Gallery() {
  return (
    <div className="max-w-6xl mx-auto mt-14 px-4 py-10">
      <h1 className="text-center text-4xl font-serif">
        Our Amazing And Unforgettable Times
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
        {/* Column 1 */}
     <div className="relative h-64 w-full rounded-xl overflow-hidden cursor-pointer group
                shadow-md hover:shadow-xl transition-shadow duration-500">
  {/* Image */}
  <img
    src="/assets/gallery1.png"
    alt="Gallery"
    className="w-full h-full object-cover object-center
               transition-transform duration-500 ease-out
               group-hover:scale-105"
  />

  {/* Light transparent overlay */}
  <div
    className="absolute inset-0 
               bg-white/0 
               group-hover:bg-white/15 
               transition-all duration-500 pointer-events-none">
  </div>
</div>
        {/* Column 2 */}
     <div className="relative h-64 w-full rounded-xl overflow-hidden cursor-pointer group
                shadow-md hover:shadow-xl transition-shadow duration-500">
  {/* Image */}
  <img
    src="/assets/gallery5.png"
    alt="Gallery"
    className="w-full h-full object-cover object-center
               transition-transform duration-500 ease-out
               group-hover:scale-105"
  />

  {/* Light transparent overlay */}
  <div
    className="absolute inset-0 
               bg-white/0 
               group-hover:bg-white/15 
               transition-all duration-500 pointer-events-none">
  </div>
</div>
        {/* Column 3 */}
     <div className="relative h-64 w-full rounded-xl overflow-hidden cursor-pointer group
                shadow-md hover:shadow-xl transition-shadow duration-500">
  {/* Image */}
  <img
    src="/assets/galler4.jpg"
    alt="Gallery"
    className="w-full h-full object-cover object-center
               transition-transform duration-500 ease-out
               group-hover:scale-105"
  />

  {/* Light transparent overlay */}
  <div
    className="absolute inset-0 
               bg-white/0 
               group-hover:bg-white/15 
               transition-all duration-500 pointer-events-none">
  </div>
</div>
        {/* Column 4 */}
     <div className="relative h-64 w-full rounded-xl overflow-hidden cursor-pointer group
                shadow-md hover:shadow-xl transition-shadow duration-500">
  {/* Image */}
  <img
    src="/assets/party1.jpg"
    alt="Gallery"
    className="w-full h-full object-cover object-center
               transition-transform duration-500 ease-out
               group-hover:scale-105"
  />

  {/* Light transparent overlay */}
  <div
    className="absolute inset-0 
               bg-white/0 
               group-hover:bg-white/15 
               transition-all duration-500 pointer-events-none">
  </div>
</div>
 
 



       
       


       
       
      
      </div>
    </div>
  );
}

export default Gallery;
