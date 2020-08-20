import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Content from "./Content";

class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Banner />
        <Content />
      </Router>
    );
  }
}

export default Header;
