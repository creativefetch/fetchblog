import React from 'react'

const ProductBlock = (props) => {

    return (
        <div className="productEditT2">
            {props.title}
            <p>
                {props.copy}
            </p>
        </div>
    )
}


export default ProductBlock
