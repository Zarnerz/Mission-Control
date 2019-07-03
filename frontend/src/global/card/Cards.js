import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <section style={cardContainerStyle}>
        <h3 style={cardH3Style}>{this.props.title}</h3>
      </section>
    );
  }
}

const cardContainerStyle = {
  maxWidth: "90vw",
  padding: "1rem"
};

const cardH3Style = {
  marginTop: "1rem",
  fontSize: "2rem",
  height: "100px"
};

export default Card;
