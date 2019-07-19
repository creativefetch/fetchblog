import React from 'react';

const QuoteImage = (props) => {
    console.log(props)
    return (
        <div className="secondaryImgT3">
            <img className="scaleImageT1" src={`/shop/2/standalone/hub/images/${props.Image ? props.Image : null}.jpg`} alt="" />
        </div>
    )

}
export default QuoteImage