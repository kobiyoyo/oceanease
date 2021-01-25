import React from "react";
import { Icon, Button } from "antd";
import { NavLink } from "react-router-dom";

const Notfound = () => (
  <div>
    <div className="breadLink"></div>
    <div className="contentWrap">
      <div className="content align_text">
        <div class="notfound-cont text-center">
          <h2 className="four">404</h2>
          <h3 className="notFound">Not Found</h3>
          <h4 className="oops">
            Oops! Something Went Wrong. The Page You Are Looking Not Found.
          </h4>
          <Button type="primary" size="large">
            <Icon type="home" />{" "}
            <NavLink to="/" style={{ color: "white" }} exact={true}>
              Home
            </NavLink>{" "}
          </Button>
        </div>
      </div>
    </div>
  </div>
);
export default Notfound;
