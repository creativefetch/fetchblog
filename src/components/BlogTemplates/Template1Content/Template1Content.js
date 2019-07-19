import React from 'react'
const ReactMarkdown = require('react-markdown/with-html')

const Template1Content = (props) => {

        return (

                    <ReactMarkdown escapeHtml={false}>
                            {props.Content}
                    </ReactMarkdown>
        )
    }


export default Template1Content