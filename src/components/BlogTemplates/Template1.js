import React from 'react'

import BlogHeader from "./BlogHeader/BlogHeader"
import BlogIntroduction from "./BlogIntroduction/BlogIntroduction"
import Quote from "./Quote/Quote"

const ReactMarkdown = require('react-markdown/with-html')

class Template1 extends React.Component {


    render() {
        return (
            <div>
                <BlogHeader />
                <div className="container fetchBlog">
                    <div className="grid">
                        <div className="grid__col grid__col--s-4-of-4 grid__col--t-3-of-3 grid__col--m-3-of-5 grid__col--2-of-3 mainBodyT1">
                            <p>template 1</p>
                            <BlogIntroduction />
                            <ReactMarkdown escapeHtml={false}>
                            </ReactMarkdown>
                            <Quote />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Template1