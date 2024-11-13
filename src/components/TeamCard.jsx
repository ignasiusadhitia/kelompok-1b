import React from "react";
import Typography from "./Typography";
import Person1 from "../assets/AssetsAboutPages/Person1.png";
import Person2 from "../assets/AssetsAboutPages/Person2.png";
import Person3 from "../assets/AssetsAboutPages/Person3.png";
import Person4 from "../assets/AssetsAboutPages/Person4.png";

// data object
const teamMembers = [
  {
    name: "Larry F. Burnett",
    role: "CEO",
    image: Person1,
  },
  {
    name: "Meghan J. Webb",
    role: "CTO",
    image: Person2 ,
  },
  {
    name: "Yvonne J. Cullum",
    role: "CFO",
    image: Person3 ,
  },
  {
    name: "Diana H. Williams",
    role: "COO",
    image: Person4,
  },
  {
    name: "Larry F. Burnett",
    role: "CEO",
    image: Person1,
  },
  {
    name: "Meghan J. Webb",
    role: "CTO",
    image: Person2,
  },
  {
    name: "Yvonne J. Cullum",
    role: "CFO",
    image: Person3,
  },
  {
    name: "Diana H. Williams",
    role: "COO",
    image: Person4,
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