import React from 'react';
const ReactMarkdown = require('react-markdown/with-html')

const BlogIntroduction = (props) => {
    return (
        <ReactMarkdown escapeHtml={false}>
            {props.Intro}
        </ReactMarkdown> 
    )
}

export default BlogIntroduction