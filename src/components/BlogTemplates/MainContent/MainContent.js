import React from 'react';
const ReactMarkdown = require('react-markdown/with-html');

const MainContent = (props) => {

        return (

                    <ReactMarkdown escapeHtml={false}>
                            {props.Content}
                    </ReactMarkdown>
        )
    }


export default MainContent