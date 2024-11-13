import React from "react";
import Typography from "./Typography";
import quote from "../assets/quote.jpg";

const QuoteCard = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 w-full md:w-3/4">
        <div className="bg-dark-blue-100 rounded-lg p-10 text-center text-white relative overflow-hidden">
          {/* Gambar sebagai background */}
          <img
            src={quote}
            alt="Quote"
            className="absolute top-0 left-0 w-full h-full object-cover
            opacity-20"
          />
          {/* Overlay filter warna */}
          <div className="absolute top-0 left-0 w-full h-full"></div>
          <div className="relative z-10">
            <Typography
              variant="strong"
              className="text-white mb-8 text-2xl leading-8"
            >
              "Some of the History of Our Company is that
              <br />
              we are Catching up through Video"
            </Typography>
          </div>
          <button className="relative z-10 bg-peach-red-100 text-white px-4 py-2 rounded-md mt-4">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
