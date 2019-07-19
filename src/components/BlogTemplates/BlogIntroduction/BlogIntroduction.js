import React from 'react';
const ReactMarkdown = require('react-markdown/with-html')
const BlogIntroduction = (props) => {
    return (
        <ReactMarkdown escapeHtml={false}>
            <h2>{props.blogJSON}</h2>
        </ReactMarkdown>
    )

}

export default BlogIntroduction