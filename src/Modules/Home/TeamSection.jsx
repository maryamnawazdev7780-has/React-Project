import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaShareAlt,
} from "react-icons/fa";

const teamData = [
  {
    id: 1,
    name: "Christina Zimmerman",
    role: "CEO, Events BD",
    image: "/assets/team2.png",
  },
  {
    id: 2,
    name: "Erik Huber",
    role: "CEO, Events BD",
    image: "/assets/team3.png",
  },
  {
    id: 3,
    name: "Rivanur R. Rafi",
    role: "CEO, Events BD",
    image: "/assets/team4.png",
  },
];

const TeamSection = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          teamData.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, i]);
            }, i * 200); // 👈 stagger delay
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* HEADING */}
      <div className="mb-14">
        <p className="text-purple-600 font-semibold mb-2">
          Team Member
        </p>
        <h2 className="text-4xl font-bold leading-tight">
          Get A New Experience <br /> With Eventino
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamData.map((item, index) => {
          const isVisible = visibleCards.includes(index);

          return (
            <div
              key={item.id}
              className={`
                relative bg-white rounded-2xl p-8 shadow-sm
                transition-all duration-[900ms] ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }
              `}
            >
              {/* IMAGE */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 rounded-full object-cover border-[6px] border-white shadow"
                />
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-semibold text-center">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 text-center mb-6">
                {item.role}
              </p>

              <div className="border-t pt-4 flex justify-between items-center text-sm text-gray-500">
                <span>+88 (099) 8764 321</span>
                <span>info@example.com</span>
              </div>

              {/* SHARE ICON */}
              <div className="absolute bottom-24 right-6 group">
                <div className="w-11 h-11 bg-purple-600 text-white rounded-full flex items-center justify-center cursor-pointer">
                  <FaShareAlt />
                </div>

                {/* SOCIAL ICONS */}
                <div className="absolute right-0 bottom-14 flex flex-col gap-3">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                    (Icon, i) => (
                      <span
                        key={i}
                        className="
                          w-10 h-10 bg-purple-600 text-white rounded-full
                          flex items-center justify-center
                          opacity-0 translate-y-6
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-500
                        "
                        style={{ transitionDelay: `${i * 120}ms` }}
                      >
                        <Icon size={14} />
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
