import React, { Component } from "react";
import Header from "../../global/header";
import Blurb from "../../global/blurb";

class CurrentPost extends Component {
  render() {
    return (
      <div>
        <Blurb title="Title" blurb="Blurby McBlurberson" />
      </div>
    );
  }
}

export default CurrentPost;
