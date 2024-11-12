import React from "react";
import Typography from "./Typography";

// data object
const teamMembers = [
  {
    name: "Larry F. Burnett",
    role: "CEO",
    image: "src/assets/AssetsAboutPages/Rectangle 14.png",
  },
  {
    name: "Meghan J. Webb",
    role: "CTO",
    image: "src/assets/AssetsAboutPages/Rectangle 15.png",
  },
  {
    name: "Yvonne J. Cullum",
    role: "CFO",
    image: "src/assets/AssetsAboutPages/Rectangle 16.png",
  },
  {
    name: "Diana H. Williams",
    role: "COO",
    image: "src/assets/AssetsAboutPages/Rectangle 17.png",
  },
  {
    name: "Larry F. Burnett",
    role: "CEO",
    image: "src/assets/AssetsAboutPages/Rectangle 14.png",
  },
  {
    name: "Meghan J. Webb",
    role: "CTO",
    image: "src/assets/AssetsAboutPages/Rectangle 15.png",
  },
  {
    name: "Yvonne J. Cullum",
    role: "CFO",
    image: "src/assets/AssetsAboutPages/Rectangle 16.png",
  },
  {
    name: "Diana H. Williams",
    role: "COO",
    image: "src/assets/AssetsAboutPages/Rectangle 17.png",
  },
];
// data object end
function TeamSection() {
  return (
    <section className="">
      <div className="flex flex-col text-center mt-10 mb-10">
        <Typography
          variant="strong"
          color="text-peach-red-100"
          className="mb-1 font-bold"
        >
          \Team\
        </Typography>
        <Typography
          variant="h2"
          color="text-dark-blue-100"
          className="text-5xl mb-4 mt-2"
        >
          Our Leaders
        </Typography>
      </div>

      {/* Looping to retrieve data */}
      <div className="grid grid-cols-4 gap-10 px-40">
        {teamMembers.map((member, index) => (
          <div className="text-center" key={index}>
            <img src={member.image} alt={member.name} />
            <Typography
              variant="strong"
              color="text-peach-red-100"
              className="font-bold mt-10"
            >
              {member.name}
            </Typography>
            <Typography variant="pretext" className="text-sm mt-3">
              {member.role}
            </Typography>
          </div>
        ))}
      </div>
      {/* Looping to retrieve data end */}
    </section>
  );
}

export default TeamSection;
