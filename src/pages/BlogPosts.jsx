import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  const loaderData = useLoaderData();
  console.log("loaderData", loaderData);
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loaderData} />
    </>
  );
}

export default BlogPostsPage;

// Create separate function which returns the data that should be available in our <BlogPostsPage> component.
export const loader = function ({ request, params }) {
  console.log("request", request);
  // getPosts generates and sends an HTTP request to fetch some posts, checks if the fetch was successful, if not, it throws a custom error object, and if fetching the data was successful it returns a promise that eventually resolves to the JSON data that's part of the response.

  // This promise returned by getPosts() is the value returned by this function.

  // This alone does not do anything, but now this loader function can be registered on our route definition (in App.jsx).
  return getPosts();
};
