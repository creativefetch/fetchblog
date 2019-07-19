import React from 'react'

// this component should take two props
//     BLOG TITLE
//     categories = DOGS CATS ETC.

const BlogHeader = (props) => {
    return (

        <div className="grid__col grid__col--3-of-3 mainBannerT1 positionShift">
            <div className="container no-background">
                
                {/* Private Contentful image */}
                {/* <img className="headerImg" src={`https:${props.blogJSON.headerImage.fields.file.url}`} alt="Header" /> */}

                {/* git Stored image */}
                <img className="headerImg" src={`/shop/2/standalone/hub/images/${props.headerImage ? props.headerImage :null}.jpg`} alt="Header" />

                {/* Ocado contentful image */}
                {/* <img className="headerImg" src={`{{${props.blogJSON.headerImage}}}`} alt="Header" /> */}

                    <div className="introHeadOuterT3">
                        <div className="introHeadT1">

                            <div className="section">
                                {props.categories.map(element => {
                                    return `${element} | `
                                })}
					        </div>

                            <div className="introHeadMainCopy">
                                <h4>{props.blogTitle ? props.blogTitle : null}</h4>
                            </div>

                        </div>
                    </div>

		        </div>
            </div>
            )
        
        }
        export default BlogHeader
