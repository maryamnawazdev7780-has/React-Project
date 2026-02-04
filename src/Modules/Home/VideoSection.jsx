import React, { useState } from "react";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";
import PlayBtn from "../../Component/PlayBtn";

Modal.setAppElement("#root");

const VideoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SECTION */}
      <div
        className="relative h-[450px] md:h-[350px] bg-center bg-cover bg-fixed flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/assets/lounch.webp')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Play Button */}
        <button
          onClick={() => setOpen(true)}
          className="relative z-10 w-20 h-20 rounded-full bg-white flex items-center justify-center 
          shadow-xl hover:scale-110 transition duration-300 group"
        >
          <FaPlay className="text-red-600 text-2xl ml-1 group-hover:scale-110 transition" />
        </button>
      </div>

      {/* VIDEO MODAL */}
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="fixed inset-0 flex items-center justify-center px-4"
        overlayClassName="fixed inset-0 bg-black/80"
      >
        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-3 text-white text-3xl z-10"
          >
            &times;
          </button>

         <div className="-mt-72 md:ms-28 lg:ms-0 flex justify-center items-center h-52 overflow-hidden w-80 my-bg relative z-20">
            <PlayBtn  videoUrl={'https://youtu.be/oz7wmF51Gwk?si=AuwEjKnV9wqjYBBS autoplay=1'}/>
                  </div>
        </div>
      </Modal>
    </>
  );
};

export default VideoSection;
