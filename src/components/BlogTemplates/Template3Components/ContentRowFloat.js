import React from "react";

const ContentRow = props => {
  console.log(props);

  return (


    <div style={{direction:'rtl'}} className="mainBodySection" id={props.id}>
      <div style={{direction:"ltr"}}  className="sectionCopyT1">
      {props.Title ? <h3>{props.Title}</h3> : null}
        &nbsp;
        {props.Copy ? <p>{props.Copy}</p> : null}
      </div>

      {props.Image ? (
        <div className="sectionImgT1">
          <img
            src={`../images/${props.Image}.jpg`}
            width="558"
            height="431"
            alt=""
          />
        </div>
      ) : null}
    </div>
  );
};

export default ContentRow;