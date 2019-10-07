import React from 'react'
const ReactMarkdown = require('react-markdown/with-html')

const ProductBlock = (props) => {

    return (
        <div className="productEditT2">
            {props.title}
            <ReactMarkdown>
                {props.copy}
            </ReactMarkdown>
        </div>
    )
}


export default ProductBlock
