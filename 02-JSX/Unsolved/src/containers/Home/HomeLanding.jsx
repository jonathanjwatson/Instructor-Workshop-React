import React, { Component } from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

class HomeLanding extends Component {
  render() {
    return (
      <main class="container">
        <Portfolio />
        <About />
        <Contact />
      </main>
    );
  }
}

export default HomeLanding;
