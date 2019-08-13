import React from "react";
import MainContent from "../MainContent/MainContent"

const ContentRow = props => {
  console.log(props);

  return (
    <div className="mainBodySection" id={props.id}>
      
      <div className="sectionCopyT1">
        {props.Title ? <h3>{props.Title}</h3> : null}
        &nbsp;
        {props.Copy ? <MainContent Content={props.Copy} /> : null}
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
