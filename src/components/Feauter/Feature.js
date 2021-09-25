import React from "react";
import "./Feature.css";

const Feature = (props) => {
  //   console.log(props.fetaure);
  const { description, value } = props?.fetaure;
  return (
    <div>
      <ul>
        <li>
          {description} : {value}
        </li>
      </ul>
    </div>
  );
};

export default Feature;
