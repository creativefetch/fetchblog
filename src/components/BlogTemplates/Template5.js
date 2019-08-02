import React from "react";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogIntroduction from "./BlogIntroduction/BlogIntroduction";
import MainContent from "./MainContent/MainContent";
import "../../BaseStyles/static.scss";
import Disclaimer from "./Disclaimer/Disclaimer";

const Template5 = props => {
  const blogJSON = props.blogJson.fields;
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

      <div className="container fetchBlog">
        {blogJSON.introductionCopy ? (
          <BlogIntroduction Intro={blogJSON.introductionCopy} />
        ) : null}

        <div id="pro-cons">
          <div className="bl-nav-btns">
            <a className="btn-1" href="#st-box1">
              {blogJSON.button1}
            </a>
            <a className="btn-2" href="#st-box2">
            {blogJSON.button2}
            </a>
          </div>

          <div className="main-container">
            <a id="box1" />
            <div className="box">
              <div className="content-title">
                <h3>{blogJSON.block1Title}</h3>
              </div>

              <div className="content-copy">
                {blogJSON.block1MainContent ? (
                  <MainContent Content={blogJSON.block1MainContent} />
                ) : null}
              </div>

              <h3 className="fop-header">{blogJSON.block1FopTitle}</h3>

              <div className="fop-container">
                <div className="product-container">
                  <fop skus={blogJSON.block1Fop1} />
                </div>
                <div className="product-container">
                  <fop skus={blogJSON.block1Fop2} />
                </div>
              </div>
            </div>

            <div className="line-seperator" />

            <a id="box2" />
            <div className="box">
              <div className="content-title">
                <h3>{blogJSON.block2Title}</h3>
              </div>

              <div className="content-copy">
                {blogJSON.block2MainContent ? (
                  <MainContent Content={blogJSON.block2MainContent} />
                ) : null}
              </div>

              <h3 className="fop-header">{blogJSON.block2FopTitle}</h3>
              <div className="fop-container">
                <div className="product-container">
                  <fop skus={blogJSON.block1Fop1} />
                </div>
                <div className="product-container">
                  <fop skus={blogJSON.block1Fop1} />
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
