import React from "react";
import LatestPostSection from "../components/LatestPostSection";
import BannerSection from "../components/BannerSection";
import BlogListCard from "../components/BlogListCard";
const Blog = () => {
  return (
    <>
      <BannerSection title="Blogs" breadCrumb="Home / Blogs"  />
      <LatestPostSection />
      <BlogListCard />
    </>
  );
};

export default Blog;
