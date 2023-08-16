import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import BlogSidebarPage from "../../views/blog/blogSidebarPage";

const BlogSidebar: NextPage = () => {
  return (
    <Layout1>
      <BlogSidebarPage />
    </Layout1>
  );
};

export default BlogSidebar;
