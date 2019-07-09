import React, { Component } from "react";

class Blurb extends Component {
  render() {
    console.log(this.props);
    return (
      <section style={blurbContainerStyle}>
        <h3 style={blurbH3Style}>{this.props.title}</h3>
        <p>{this.props.blurb}</p>
      </section>
    );
  }
}

const blurbContainerStyle = {
  maxWidth: "90vw",
  padding: "1rem"
};

const blurbH3Style = {
  marginTop: "1rem",
  fontSize: "2rem",
  height: "100px"
};

export default Blurb;
