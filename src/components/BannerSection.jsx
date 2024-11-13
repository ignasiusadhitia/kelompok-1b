import React from "react";
import Typography from "../components/Typography";

export default function BannerSection({title, breadCrumb}) {
  return (
      <div className="bg-dark-blue-100 flex flex-col align-middle py-10">
      <Typography variant="strong" color="text-peach-red-100" className="flex text-4xl justify-center mb-1">
        {title}
      </Typography>
      <Typography variant="pretext" color="text-off-white" className="flex justify-center text-sm mt-2">
        {breadCrumb}
      </Typography>
    </div>
  );
}
