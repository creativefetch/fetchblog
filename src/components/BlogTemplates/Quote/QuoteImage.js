import React from "react";

const QuoteImage = props => {
    console.log(props)
  const isimageSupplied = () => (
    <img
      className="scaleImageT1"
      src={`../images/${props.Image}.jpg`}
      alt=""
    />
  );

  return (
    <div className="secondaryImgT3">
      {props.Image ? (
        <img
          className="scaleImageT1"
          src={`../images/${props.Image}.jpg`}
          alt={props.Image}
        />
      ) : null}
    </div>
  );
};

export default QuoteImage;
