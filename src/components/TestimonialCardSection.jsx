import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Typography from "./Typography";

const TestimonialCardSection = () => {
  // Set initial state to 1 (middle card)
  const [currentIndex, setCurrentIndex] = useState(1);

  const testimonials = [
    <TestimonialCard key={0} />,
    <TestimonialCard key={1} />,
    <TestimonialCard key={2} />,
  ];

  // Handle dot click to move cards
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-[100px]">
      <Typography
        variant="h3"
        className="text-center text-peach-red-100 mb-2.5"
      >
        \ From our Customers \
      </Typography>
      <Typography variant="h2" className="text-center text-dark-blue-100 mb-10">
        Testimonials
      </Typography>

      <div className="w-full flex flex-col items-center">
        <div className="w-screen overflow-hidden flex justify-center">
          <div className="flex transition-transform duration-500 ease-in-out gap-7">
            {testimonials.map((card, index) => (
              <div
                key={index}
                className="transition-transform duration-500 ease-in-out px-4"
                style={{
                  width: "750px", // Width of each card
                }}
              >
                {card}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex mt-4 space-x-2">
          {/* Left Indicator */}
          <button
            onClick={() => handleDotClick(0)} // Set to the first card
            className={`w-3 h-3 rounded-full ${currentIndex === 0 ? "bg-peach-red-100" : "bg-white border border-peach-red-100"}`}
          ></button>
          {/* Middle Indicator */}
          <button
            onClick={() => handleDotClick(1)} // Set to the middle card
            className={`w-3 h-3 rounded-full ${currentIndex === 1 ? "bg-peach-red-100" : "bg-white border border-peach-red-100"}`}
          ></button>
          {/* Right Indicator */}
          <button
            onClick={() => handleDotClick(2)} // Set to the last card
            className={`w-3 h-3 rounded-full ${currentIndex === 2 ? "bg-peach-red-100" : "bg-white border border-peach-red-100"}`}
          ></button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCardSection;
