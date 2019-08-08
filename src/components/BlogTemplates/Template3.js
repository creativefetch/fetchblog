import React from "react";
import BlogHeader from "./BlogHeader/BlogHeader";
import BlogIntroduction from "./BlogIntroduction/BlogIntroduction";
import Disclaimer from './Disclaimer/Disclaimer';
import "../../BaseStyles/static.scss";
import AnchorBtns from "./Template3Components/AnchorBtns";
import ContentRow from "./Template3Components/ContentRow";
import ContentRowFloat from "./Template3Components/ContentRowFloat";
import FopBlockFour from "./FopBlocks/FopBlockFour";

const Template3 = (props) => {
    const blogJSON = props.blogJson.fields

    console.log(blogJSON)
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
          <div className="grid">
            <div className="grid__col grid__col--s-4-of-4 grid__col--m-4-of-4 grid__col--8-of-8 mainBodyT1">
              {blogJSON.introductionCopy ? (
                <BlogIntroduction Intro={blogJSON.introductionCopy} />
              ) : null}

                <AnchorBtns 
                Button1={blogJSON.button1 ? blogJSON.button1 : null}
                Button2={blogJSON.button2 ? blogJSON.button2 : null}
                Button3={blogJSON.button3 ? blogJSON.button3 : null}
                Button4={blogJSON.button4 ? blogJSON.button4 : null}/>

                <ContentRow id="block1" 
                Title={blogJSON.section1Title ? blogJSON.section1Title : null }
                Copy={blogJSON.section1Copy ? blogJSON.section1Copy : null }
                Image={blogJSON.section1Image ? blogJSON.section1Image : null }
                FopsTitle={blogJSON.section1FopsTitle ? blogJSON.section1FopsTitle : null }
                FopsPicks={blogJSON.section1FopsPicks ? blogJSON.section1FopsPicks : null }
                />

                {blogJSON.section1FopsTitle && blogJSON.section1FopsPicks ? 
                <FopBlockFour 
                    FopsTitle={blogJSON.section1FopsTitle ? blogJSON.section1FopsTitle : null }
                    FopsPicks={blogJSON.section1FopsPicks ? blogJSON.section1FopsPicks : null }
                /> : 
                null}

                <ContentRowFloat 
                id="block2"
                Title={blogJSON.section2Title ? blogJSON.section2Title : null }
                Copy={blogJSON.section2Copy ? blogJSON.section2Copy : null }
                Image={blogJSON.section2Image ? blogJSON.section2Image : null }
                />

                {blogJSON.section2FopsTitle && blogJSON.section2FopsPicks ? 
                <FopBlockFour 
                    FopsTitle={blogJSON.section2FopsTitle ? blogJSON.section2FopsTitle : null }
                    FopsPicks={blogJSON.section2FopsPicks ? blogJSON.section2FopsPicks : null }
                /> :
                null}

                <ContentRow 
                id="block3"
                Title={blogJSON.section3Title ? blogJSON.section3Title : null }
                Copy={blogJSON.section3Copy ? blogJSON.section3Copy : null }
                Image={blogJSON.section3Image ? blogJSON.section3Image : null }
                />

                {blogJSON.section2FopsTitle && blogJSON.section2FopsPicks ? 
                <FopBlockFour 
                    FopsTitle={blogJSON.section3FopsTitle ? blogJSON.section3FopsTitle : null }
                    FopsPicks={blogJSON.section3FopsPicks ? blogJSON.section3FopsPicks : null }
                /> :
                null }

                <ContentRowFloat 
                id="block4"
                Title={blogJSON.section4Title ? blogJSON.section4Title : null }
                Copy={blogJSON.section4Copy ? blogJSON.section4Copy : null }
                Image={blogJSON.section4Image ? blogJSON.section4Image : null }
                FopsTitle={blogJSON.section4FopsTitle ? blogJSON.section4FopsTitle : null }
                FopsPicks={blogJSON.section4FopsPicks ? blogJSON.section4FopsPicks : null }
                />

                {blogJSON.section4FopsTitle && blogJSON.section4FopsPicks ? 
                <FopBlockFour 
                    FopsTitle={blogJSON.section4FopsTitle ? blogJSON.section4FopsTitle : null }
                    FopsPicks={blogJSON.section4FopsPicks ? blogJSON.section4FopsPicks : null }
                /> : 
                null}

            </div>
          </div>
        </div>
      </div>
    );
              }


export default Template3;
