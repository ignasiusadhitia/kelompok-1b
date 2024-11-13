import React from "react";
import LatestPostSection from "../components/LatestPostSection";
import BannerSection from "../components/BannerSection";
const Blog = () => {
  return (
    <>
      <BannerSection title="Blogs" breadCrumb="Home / Blogs"  />
      <LatestPostSection />
    </>
  );
};

export default Blog;
