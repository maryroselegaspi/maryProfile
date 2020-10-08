import React from "react";
import "./Row.css";
import CodeIcon from "@material-ui/icons/Code";

function Row({ title, imageUrl, web, github }) {
  return (
    <div className="row">
      <h3 className="row__title">{title}</h3>
      <img className="row__image" src={imageUrl} alt={title} />
      <div className="row__contents">
        <a href={web} target="_blank" className="row__webtext">
          Web
        </a>
        <a href={github} target="_blank">
          <CodeIcon className="row__icon" fontSize="medium" />
        </a>
        {/* <CodeIcon className="row__icon" fontSize="medium" /> */}
      </div>
    </div>
  );
}

export default Row;
