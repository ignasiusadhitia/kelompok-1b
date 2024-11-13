import React from "react";
import LatestPostSection from "../components/LatestPostSection";
import BannerSection from "../components/BannerSection";
import BlogListCard from "../components/BlogListCard";
import QuoteCard from "../components/QuoteCard";
const Blog = () => {
  return (
    <>
<<<<<<< HEAD
      <BannerSection title="Blogs" breadCrumb="Home / Blogs" />
=======
      {/* send props for change title and bread crumb */}
      <BannerSection title="Blogs" breadCrumb="Home / Blogs"  />
>>>>>>> 65c88dea33b0e3ec46a4257452bee9f5e2a5d77a
      <LatestPostSection />
      <BlogListCard />
      <QuoteCard />
    </>
  );
};

export default Blog;
