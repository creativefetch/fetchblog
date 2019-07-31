import React from 'react';
const ReactMarkdown = require('react-markdown/with-html');

const MainContent = (props) => {
        return (
                    <ReactMarkdown source={props.Content} escapeHtml={false} />            
        )
    }


export default MainContent