import React from 'react';

const QuoteImage = (props) => {

    if(props.Image) { return(
        <div className="secondaryImgT3">
            <img 
                className="scaleImageT1" 
                src={`/shop/2/standalone/hub/images/${props.Image}.jpg`} 
                alt="" />
        </div>
    )
    }

}

export default QuoteImage