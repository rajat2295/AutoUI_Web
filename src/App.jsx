import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
{
  /* Uncomment the section below to load the qwen 2.5 3B model jsx files */
}
// import BusinessWebsite from "./Qwen2.5-3B/BusinessWebsite.jsx";
// import Ecommerce from "./Qwen2.5-3B/Ecommerce.jsx";
// import BlogMagazine from "./Qwen2.5-3B/BlogMagazine.jsx";
// import Portfolio from "./Qwen2.5-3B/Portfolio.jsx";
// import LandingPage from "./Qwen2.5-3B/LandingPage.jsx";
// import SocialMedia from "./Qwen2.5-3B/SocialMedia.jsx";
// import DirectoryListing from "./Qwen2.5-3B/DirectoryListing.jsx";
// import Forum from "./Qwen2.5-3B/Forum.jsx";
// import NewsWebsite from "./Qwen2.5-3B/NewsWebsite.jsx";
// import Entertainment from "./Qwen2.5-3B/Entertainment.jsx";

{
  /* Uncomment the section below to load the llama 3B model jsx files */
}
// import BusinessWebsite from "./Llama3.2-3B/BusinessWebsite.tsx";
// import Ecommerce from "./Llama3.2-3B/Ecommerce.jsx";
// import BlogMagazine from "./Llama3.2-3B/BlogMagazine.jsx";
// import Portfolio from "./Llama3.2-3B/Portfolio.jsx";
// import LandingPage from "./Llama3.2-3B/LandingPage.jsx";
// import SocialMedia from "./Llama3.2-3B/SocialMedia.jsx";
// import DirectoryListing from "./Llama3.2-3B/DirectoryListing.jsx";
// import Forum from "./Llama3.2-3B/Forum.jsx";
// import NewsWebsite from "./Llama3.2-3B/NewsWebsite.jsx";
// import Entertainment from "./Llama3.2-3B/Entertainment.jsx";

{
  /* Uncomment the section below to load the llama 7B model jsx files */
}
// import BusinessWebsite from "./Llama3.1-8B/BusinessWebsite";
// import Ecommerce from "./Llama3.1-8B/Ecommerce.jsx";
// import Entertainment from "./Llama3.1-8B/Entertainment.jsx";
// import NewsWebsite from "./Llama3.1-8B/NewsWebsite.jsx";
// import BlogMagazine from "./Llama3.1-8B/BlogMagazine.jsx";
// import Portfolio from "./Llama3.1-8B/Portfolio.jsx";
// import LandingPage from "./Llama3.1-8B/LandingPage.jsx";
// import SocialMedia from "./Llama3.1-8B/SocialMedia.jsx";
// import DirectoryListing from "./Llama3.1-8B/DirectoryListing.jsx";
// import Forum from "./Llama3.1-8B/Forum.jsx";

{
  /* Uncomment the section below to load the GPT-5 17T model jsx files */
}
// import BusinessWebsite from "./GPT-5/BusinessWebsite.jsx";
// import Ecommerce from "./GPT-5/Ecommerce.jsx";
// import BlogMagazine from "./GPT-5/BlogMagazine.jsx";
// import Portfolio from "./GPT-5/Portfolio.jsx";
// import LandingPage from "./GPT-5/LandingPage.jsx";
// import SocialMedia from "./GPT-5/SocialMedia.jsx";
// import DirectoryListing from "./GPT-5/DirectoryListing.jsx";
// import Forum from "./GPT-5/Forum.jsx";
// import NewsWebsite from "./GPT-5/NewsWebsite.jsx";
// import Entertainment from "./GPT-5/Entertainment.jsx";

{
  /* Uncomment the section below to load the Qwen2.5 coder 7B model jsx files */
}
import BusinessWebsite from "./Qwen2.5-7B/BusinessWebsite.jsx";
// import Ecommerce from "./Qwen2.5-7B/Ecommerce.jsx";
// import LandingPage from "./Qwen2.5-7B/LandingPage.jsx";
// import Portfolio from "./Qwen2.5-7B/Portfolio.jsx";
// import BlogMagazine from "./Qwen2.5-7B/BlogMagazine.jsx";
// import Forum from "./Qwen2.5-7B/Forum.jsx";
// import Entertainment from "./Qwen2.5-7B/Entertainment.jsx";
// import DirectoryListing from "./Qwen2.5-7B/DirectoryListing.jsx";
// import SocialMedia from "./Qwen2.5-7B/SocialMedia.jsx";
import NewsWebsite from "./Qwen2.5-7B/NewsWebsite.jsx";
// import YouTubeClone from "./YouTubeClone.tsx";

function App() {
  return (
    // uncomment the component you want to render below
    <BrowserRouter>
      {/* <BusinessWebsite /> */}
      {/* <Ecommerce /> */}
      {/* <BlogMagazine /> */}
      {/* <Portfolio /> */}
      {/* <LandingPage /> */}
      {/* <SocialMedia /> */}
      {/* <DirectoryListing /> */}
      {/* <Forum /> */}
      <NewsWebsite />
      {/* <Entertainment /> */}
    </BrowserRouter>
  );
}

export default App;
