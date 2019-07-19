import React from 'react';

const QuoteImage = (props) => {
    console.log(props)
    return (
        <div className="secondaryImgT3">
            <img className="scaleImageT1" src={props.Image} alt="" />
        </div>
    )

}
export default QuoteImage