import React from "react";
import "./Error.scss";
function Error({ title, message }) {
  return (
    <div className="errorPage">
      <div className="errorPage__title">{title}</div>
      <div className="errorPage__message">{message}</div>
    </div>
  );
}

export default Error;
