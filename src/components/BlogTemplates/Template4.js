import React from "react";
import BlogHeader from "./BlogHeader/BlogHeader"
import BlogIntroduction from "./BlogIntroduction/BlogIntroduction"
import Quote from "./Quote/Quote";
import MainContent from "./MainContent/MainContent";
import FetchPicks from "../BlogTemplates/FopBlocks/FetchPicks"
import "../../BaseStyles/static.scss"
import Disclaimer from './Disclaimer/Disclaimer';

class Template4 extends React.Component {
  render() {
    return (
      <div>
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
          <div class="grid">
            <div class="grid__col grid__col--s-4-of-4 grid__col--t-3-of-3 grid__col--m-3-of-5 grid__col--2-of-3 mainBodyT1">
              {blogJSON.introductionCopy ? (
                <BlogIntroduction Intro={blogJSON.introductionCopy} />
              ) : null}

              {blogJSON.blogMainContent ? (
                <MainContent Content={blogJSON.blogMainContent} />
              ) : null}
            </div>

            <Quote
              quoteImage={blogJSON.quoteImage}
              blogQuote={blogJSON.blogQuote}
            />
          </div>
        </div>

        <FetchPicks
          Fops={blogJSON.fetchPicksFops ? blogJSON.fetchPicksFops : null}
        />
      </div>
    );
  }
}

export default Template4;
