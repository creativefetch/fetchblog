import React from 'react';

const QuoteImage = (props) => {

  const isimageSupplied = () => (<img className="scaleImageT1" src={`/shop/2/standalone/hub/images/${props.Image}.jpg`} alt="" />) 

const isimageSupplied = 5;
    
        return(
        <div className="secondaryImgT3">
           
        {props.Image ? isimageSupplied:null}

        </div>)
    
    }


export default QuoteImage