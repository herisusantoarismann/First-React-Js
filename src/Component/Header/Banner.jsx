import React from "react";
import foto from "../../img/foto.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={foto} alt="" />
      <p>Full Stack Developer</p>
    </div>
  );
};

export default Banner;
