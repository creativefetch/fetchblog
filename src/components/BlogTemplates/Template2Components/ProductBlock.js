import React from 'react'

const ProductBlock = (props) => {
    return (
            <div className="productBlock">
                <fop skus={props.fopSku} />
            </div>
    )
}
export default ProductBlock


