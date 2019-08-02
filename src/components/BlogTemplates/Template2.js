import React from 'react'
import BlogHeader from "./BlogHeader/BlogHeader"
import BlogIntroduction from "./BlogIntroduction/BlogIntroduction"
import "../../BaseStyles/static.scss"
import Disclaimer from './Disclaimer/Disclaimer';
import ProductBlock from "./Template2Components/ProductBlock";
import ProductEdit from "./Template2Components/ProductEdit";

const Template2 = (props) => {
    
    const blogJSON = props.blogJson.fields
    return (
        <div id="TheFetchBlog">
            <BlogHeader
                blogTitle={blogJSON.blogTitle}
                headerImage={blogJSON.headerImage}
                categories={blogJSON.categories} />

            {/* if disclaimer is filled out the show disclaimer component */}
            {blogJSON.disclaimer ? <Disclaimer Disclaimer={blogJSON.disclaimer} /> : null}


            <div className="container fetchBlog">
                <div className="grid">
                    <div className="grid__col grid__col--s-none grid__col--m-none grid__col--1-of-8"></div>

                    <div className="grid__col grid__col--s-4-of-4 grid__col--t-4-of-4 grid__col--m-4-of-4 grid__col--8-of-8 mainBodyT1">


                        {blogJSON.introductionCopy ? <BlogIntroduction Intro={blogJSON.introductionCopy} /> : null}

                        <div className="fetchEdit">Fetch Top Picks</div>

                        {/* Need converting into a fop loop at some point.  */}
                        {/* if there is a fop 1 in the JSON Data then render the componenet if not do not render. render null. */}
                        {blogJSON.fop1 ? <ProductBlock fopSku={blogJSON.fop1} /> : null}
                        {blogJSON.fop1 ? <ProductEdit title={blogJSON.fop1Title} copy={blogJSON.fop1Description} /> :null}
                        
                        {blogJSON.fop2 ? <ProductBlock fopSku={blogJSON.fop2} />: null}
                        {blogJSON.fop2 ? <ProductEdit title={blogJSON.fop2Title} copy={blogJSON.fop2Description} />: null}

                        {blogJSON.fop3 ? <ProductBlock fopSku={blogJSON.fop3} />: null}
                        {blogJSON.fop3 ? <ProductEdit title={blogJSON.fop3Title} copy={blogJSON.fop3Description} />: null}

                        {blogJSON.fop4 ? <ProductBlock fopSku={blogJSON.fop4} />: null}
                        {blogJSON.fop4 ? <ProductEdit title={blogJSON.fop4Title} copy={blogJSON.fop4Description} />: null}

                        {blogJSON.fop5 ? <ProductBlock fopSku={blogJSON.fop5} />: null}
                        {blogJSON.fop5 ? <ProductEdit title={blogJSON.fop5Title} copy={blogJSON.fop5Description} />: null}

                        {blogJSON.fop6 ? <ProductBlock fopSku={blogJSON.fop6} />: null}
                        {blogJSON.fop6 ? <ProductEdit title={blogJSON.fop6Title} copy={blogJSON.fop6Description} />: null}

                        {blogJSON.fop7 ? <ProductBlock fopSku={blogJSON.fop7} />: null}
                        {blogJSON.fop7 ? <ProductEdit title={blogJSON.fop7Title} copy={blogJSON.fop7Description} />: null}

                        {blogJSON.fop8 ? <ProductBlock fopSku={blogJSON.fop8} />: null}
                        {blogJSON.fop8 ? <ProductEdit title={blogJSON.fop8Title} copy={blogJSON.fop8Description} />: null}

                    </div>

                </div>
            </div>


        </div>
    )
}


export default Template2