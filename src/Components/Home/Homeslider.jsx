import React, { useEffect, useState } from "react";


const Homeslider = () => {
  const slides = [
    "https://lirp.cdn-website.com/a5f4c724/dms3rep/multi/opt/HOW+TO+STORE+YOUR+SPORTING+EQUIPMENT-1920w.jpg",
    "https://rayofhealth.sg/wp-content/uploads/2025/08/Sports-Equipment.png",
    "https://cdn1.epicgames.com/ue/product/Screenshot/TMSportsEquipment0207-1920x1080-e82a38ef95e5734d08375b0a3f0e9eed.png?resize=1&w=1920",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="md:w-11/12 md:mx-auto mt-5">
        <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-xl">
      {/* Slide Image */}
      <img
        src={slides[current]}
        alt="slider"
        className="w-full h-full object-cover object-[center_80%] transition-all duration-700"
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

      {/* Left Button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
      >
        ❯
      </button>
    </div>
   
  
    </div>
    
  );
};

export default Homeslider;
