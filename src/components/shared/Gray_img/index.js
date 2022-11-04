import React, { Fragment } from "react";
import "./style.css";

const GrayImg = (props) => {
  return (
    <Fragment>
      <img
        className={props.gray ? "black-and-white-img" : "color-img"}
        src={props.img_url}
        alt="saturno"
      ></img>
    </Fragment>
  );
};
export default GrayImg;
