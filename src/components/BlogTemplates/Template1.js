import React from 'react'
import BlogHeader from "./BlogHeader/BlogHeader"
import BlogIntroduction from "./BlogIntroduction/BlogIntroduction"
import Quote from "./Quote/Quote";
import MainContent from "./MainContent/MainContent";
import FetchPicks from "../BlogTemplates/FopBlocks/FetchPicks"
import "../../BaseStyles/static.scss"
import Disclaimer from './Disclaimer/Disclaimer';


const Template1 = (props) => {
    const blogJSON = props.blogJson.fields
        return (
            <div id="TheFetchBlog">
                <BlogHeader 
                    blogTitle={blogJSON.blogTitle} 
                    headerImage={blogJSON.headerImage} 
                    categories={blogJSON.categories} />

                {/* if disclaimer is filled out the show disclaimer component */}
                {blogJSON.disclaimer ? <Disclaimer Disclaimer={blogJSON.disclaimer} />: null}


                <div className="container fetchBlog">
                    <div className="grid">
                        <div className="grid__col grid__col--s-4-of-4 grid__col--t-3-of-3 grid__col--m-3-of-5 grid__col--2-of-3 mainBodyT1">

                            {blogJSON.introductionCopy?<BlogIntroduction Intro={blogJSON.introductionCopy}/>:null}

                            {blogJSON.blogMainContent?<MainContent Content={blogJSON.blogMainContent}/>:null}

                        </div>

                        <Quote 
                        quoteImage={blogJSON.quoteImage} 
                        blogQuote={blogJSON.blogQuote} />

                    </div>
                </div>


                {blogJSON.fetchPicksFops? <FetchPicks Fops={blogJSON.fetchPicksFops}/> : null}

            </div>
        )
    }


export default Template1