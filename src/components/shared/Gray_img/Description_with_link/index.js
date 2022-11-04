import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
  if (props.link) {
    return (
      <Fragment>
        <p>{props.planetDescription}</p>
        <p>
          <a href="{props.link}">{props.link}</a>
        </p>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <p>
          <u>{props.planetDescription}</u>
        </p>
      </Fragment>
    );
  }
};
export default DescriptionWithLink;
