import React from "react";
import { Link } from "react-router-dom";
import "./styles/Redirect.scss";

export default function RedirectButton(props) {
  return (
    <React.Fragment>
      <div className="btn">
        {props.isWorkOut ? (
          props.data.feedback ? (
            <span>!</span>
          ) : (
            <Link to={props.api}>
              <div>
                <img src={require("../assets/arrow.png")} alt="" />
              </div>
            </Link>
          )
        ) : (
          <Link to={props.api}>
            <div>
              <img src={require("../assets/arrow.png")} alt="" />
            </div>
          </Link>
        )}
      </div>
    </React.Fragment>
  );
}
