import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post" //#C
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user, //#D
        React.createElement(
          "span",
          {
            className: "postBody" //#E
          },
          this.props.content //#F
        )
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired, //#G
  content: PropTypes.string.isRequired, //#G
  id: PropTypes.number.isRequired //#G
};

const App = React.createElement(Post, {
  id: 1, //#H
  content: " said: This is a post!", //#H
  user: "mark" //#H
});

render(App, node);
