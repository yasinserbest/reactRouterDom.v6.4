import React from "react";

import { Link } from "react-router-dom";
import "./PageNotFound.scss";
function PageNotFound() {
  return (
    <div className="notFoundPage">
      <div className="notFoundPage__box">
        <div className="notFoundPage__box--404">404</div>
        <div className="notFoundPage__box--text">PAGE NOT FOUND!</div>
        <Link to="/" className="notFoundPage__box--btn">
          HOMEPAGE
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
