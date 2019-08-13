import React from "react";

const AnchorBtns = props => {
  console.log(props);

  return (
    <div className="anchorsBtns">
      {props.Button1 ? (
        <a href="#st-block1" className="anchorBtn">
          {" "}
          {props.Button1}
        </a>
      ) : null}
      {props.Button2 ? (
        <a href="#st-block2" className="anchorBtn">
          {props.Button2}
        </a>
      ) : null}

      {props.Button3 ? (
        <a href="#st-block3" className="anchorBtn">
          {props.Button3}
        </a>
      ) : null}

      {props.Button4 ? (
        <a href="#st-block4" className="anchorBtn">
          {props.Button4}
        </a>
      ) : null}
    </div>
  );
};

export default AnchorBtns;
