import React from "react";

const AnchorBtns = props => {
  console.log(props);

  return (
    <div>
      <a href="#st-block1" className="blockArea3">
        {props.Button1}
      </a>

      <a href="#st-block2" className="blockArea3">
        {props.Button2}
      </a>

      <a href="#st-block3" className="blockArea3">
        {props.Button3}
      </a>

      <a href="#st-block4" className="blockArea3">
        {props.Button4}
      </a>

      <a href="#st-block1" className="blockArea1Mob">
        {props.Button1}
      </a>

      <a href="#st-block2" className="blockArea1Mob">
        {props.Button2}
      </a>

      <a href="#st-block3" className="blockArea1Mob">
        {props.Button3}
      </a>

      <a href="#st-block4" className="blockArea1Mob">
        {props.Button4}
      </a>
    </div>
  );
};

export default AnchorBtns;
