import React from "react";
import Typography from "./Typography";

const QuoteCard = () => {
  return (
    <div class="py-16">
      <div class="container mx-auto px-4 w-full md:w-3/4">
        <div class="bg-dark-blue-100 rounded-lg p-10 text-center text-white">
          <div>
            <Typography variant="strong" className="text-white mb-8 text2xl leading-8">
              "Some of the History of Our Company is that
              <br />
              we are Catching up through Video"
            </Typography>
          </div>
          <button class="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
