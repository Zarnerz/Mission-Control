import React, { Component } from "react";
import Blurb from "../../global/blurb";

class CurrentPost extends Component {
  render() {
    const notes = [
      { title: "title1", blurb: "Blurb1" },
      { title: "title2", blurb: "Blurb2" },
      { title: "title3", blurb: "Blurb3" },
      { title: "title4", blurb: "Blurb4" },
      { title: "title5", blurb: "Blurb5" },
      { title: "title6", blurb: "Blurb6" },
      { title: "title7", blurb: "Blurb7" },
      { title: "title8", blurb: "Blurb8" }
    ];
    return (
      <div>
        {notes.map(note => {
          return <Blurb title={note.title} blurb={note.blurb} />;
        })}
      </div>
    );
  }
}

export default CurrentPost;
