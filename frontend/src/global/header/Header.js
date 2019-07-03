import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="home" style={headerStyle}>
        <nav style={navStyle}>
          <ul style={navUlStyle}>
            <li style={liStyle}>
              <h1>Dropdown</h1>
            </li>
            <li style={liStyle}>
              <img src="" alt="mission control logo" style={navLogoStyle} />
            </li>
            <li style={liStyle}>
              <h1>Add</h1>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const headerStyle = {
  maxWidth: "98vw",
  padding: "1rem"
};

const navStyle = {
  display: "flex"
};

const navUlStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

const navLogoStyle = {
  maxWidth: "225px",
  height: "auto",
  paddingBottom: "1rem"
};

const liStyle = {
  display: "inline"
};

export default Header;
