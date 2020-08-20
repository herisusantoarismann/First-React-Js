import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
      <Route path="/project">
        <Project />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default Content;
