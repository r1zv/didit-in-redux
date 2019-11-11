import React, { Component } from "react";

class AboutModal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <h1>A Quick Blurb!</h1>
        <h2>
          Experienced Software Developer with a demonstrated history of building
          web and mobile applications utilizing HTML5, CSS 3, and various
          JavaScript frameworks and libraries. Recognized as a strategic thinker
          with strong problem solving skills and excels in facilitating
          communication between technology teams and clients. A Ratcliffe Fellow
          from the Entrepreneurship Fellows Program at the University of
          Baltimore Merrick School of Business.{" "}
        </h2>
        <button onClick={this.onClose}>close</button>
      </div>
    );
  }
}

export default AboutModal;
