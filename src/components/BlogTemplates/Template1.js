import React from 'react'
import BlogHeader from "./BlogHeader/BlogHeader"
import BlogIntroduction from "./BlogIntroduction/BlogIntroduction"
import Quote from "./Quote/Quote";
import Template1Content from "./Template1Content/Template1Content";
import FetchPicks from "../BlogTemplates/FopBlocks/FetchPicks"
import "../../BaseStyles/static.scss"
import Disclaimer from './Disclaimer/Disclaimer';


const Template1 = (props) => {
    const blogJSON = props.blogJson.fields
        return (
            <div>
                <BlogHeader blogJSON={blogJSON} />
                {blogJSON.disclaimer ? <Disclaimer Disclaimer={blogJSON.disclaimer} />: null}
                <div className="container fetchBlog">
                    <div className="grid">
                        <div className="grid__col grid__col--s-4-of-4 grid__col--t-3-of-3 grid__col--m-3-of-5 grid__col--2-of-3 mainBodyT1">
                            <BlogIntroduction blogJSON={blogJSON.introductionCopy ? blogJSON.introductionCopy:null}/>
                            <Template1Content Content={blogJSON.blogMainContent ? blogJSON.blogMainContent:null}/>
                        </div>
                        <Quote blogJSON={blogJSON}/>
                    </div>
                </div>
            <FetchPicks Fops={blogJSON.fetchPicksFops ? blogJSON.fetchPicksFops:null}/>
            </div>
        )
    }


export default Template1