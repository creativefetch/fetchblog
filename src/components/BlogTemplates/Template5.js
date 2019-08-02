import React from "react";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogIntroduction from "./BlogIntroduction/BlogIntroduction";
import MainContent from "./MainContent/MainContent";
import "../../BaseStyles/static.scss";
import Disclaimer from "./Disclaimer/Disclaimer";

const Template5 = props => {
  const blogJSON = props.blogJson.fields;
  console.log(blogJSON);

  return (
    <div id="TheFetchBlog">
      <BlogHeader
        blogTitle={blogJSON.blogTitle}
        headerImage={blogJSON.headerImage}
        categories={blogJSON.categories}
      />

      {/* if disclaimer is filled out the show disclaimer component */}
      {blogJSON.disclaimer ? (
        <Disclaimer Disclaimer={blogJSON.disclaimer} />
      ) : null}

      <div class="container fetchBlog">
        {blogJSON.introductionCopy ? (
          <BlogIntroduction Intro={blogJSON.introductionCopy} />
        ) : null}

        <div id="pro-cons">
          <div class="bl-nav-btns">
            <a class="btn-1" href="#st-box1">
              Pet Sitter
            </a>
            <a class="btn-2" href="#st-box2">
              Dog Boarding
            </a>
          </div>

          <div class="main-container">
            <a id="box1" />
            <div class="box">
              <div class="content-title">
                <h3>What are the benefits of a dog harness?</h3>
              </div>

              <div class="content-copy">
                {blogJSON.blogMainContent ? (
                  <MainContent Content={blogJSON.blogMainContent} />
                ) : null}
              </div>

              <h3 class="fop-header">BEST DOG HARNESSES</h3>

              <div class="fop-container">
                <div class="product-container">
                  <fop skus="440935011" />
                </div>
                <div class="product-container">
                  <fop skus="402073011" />
                </div>
              </div>
            </div>

            <div class="line-seperator" />

            <a id="box2" />
            <div class="box">
              <div class="content-title">
                <h3>What are the benefits of a dog collar?</h3>
              </div>

              <div class="content-copy">
                {blogJSON.blogMainContent ? (
                  <MainContent Content={blogJSON.blogMainContent} />
                ) : null}
              </div>
              <div class="fop-container">
                <div class="product-container">
                  <fop skus="440935011" />
                </div>
                <div class="product-container">
                  <fop skus="402073011" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;
