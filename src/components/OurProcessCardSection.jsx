import React from "react";
import { Design, Research, Develop, Test } from "../assets";
import OurProcessCard from "./OurProcessCard";
import Typography from "./Typography";

const data = [
  {
    title: "Research",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: Research,
    index: "01",
  },
  {
    title: "Design",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: Design,
    index: "02",
  },
  {
    title: "Develop",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: Develop,
    index: "03",
  },
  {
    title: "Test",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: Test,
    index: "04",
  },
];

const OurProcessCardSection = () => {
  return (
    <section className="container mx-auto py-[100px]">
      <Typography
        variant="h3"
        className="text-center text-peach-red-100 mb-2.5"
      >
        \ Planning \
      </Typography>
      <Typography variant="h2" className="text-center text-dark-blue-100 mb-10">
        Our Process
      </Typography>
      <div className="grid grid-cols-4 gap-7">
        {data.map((item) => (
          <OurProcessCard
            key={item.index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            index={item.index}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProcessCardSection;
