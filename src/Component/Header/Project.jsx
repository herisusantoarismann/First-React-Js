import React, { Fragment } from "react";
import Laptop from "../../img/laptop.png";

const Project = () => {
  return (
    <Fragment>
      <div className="container">
        <h2>Project</h2>
        <img className="laptop" src={Laptop} alt="" />
        <div className="projectImg"></div>
        <a href="" className="link_github">
          <p>Website Resep dan Menu Makanan</p>
        </a>
      </div>
    </Fragment>
  );
};

export default Project;
