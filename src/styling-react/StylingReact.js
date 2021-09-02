import React, { Component } from "react";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";

class StylingReact extends Component {
  render() {
    return (
      <div>
        <CSSModule />
        <StyledComponent />
      </div>
    );
  }
}

export default StylingReact;
