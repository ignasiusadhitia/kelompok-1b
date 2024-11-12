import React from "react";
import Typography from "../components/Typography";

export default function BannerSection() {
  return (
      <div className="bg-dark-blue-100 flex flex-col align-middle py-10">
      <Typography variant="strong" color="text-peach-red-100" className="flex text-4xl justify-center mb-3">
        About
      </Typography>
      <Typography variant="pretext" color="text-off-white" className="flex justify-center text-sm mt-4">
        Home / About
      </Typography>
    </div>
  );
}
