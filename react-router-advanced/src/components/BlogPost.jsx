// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post ID: {postId}</h1>
      <p>This is the content of blog post #{postId}.</p>
    </div>
  );
};

export default BlogPost;