import React, { Component } from "react";

class Like extends Component {
  state = {
    liked: false,
  };

  constructor(props) {
    super(props);
    this.state.liked = props.liked;
  }

  handleClick() {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) {
      classes += "-o";
    }
    return (
      <div>
        <button onClick={this.handleClick}>
          <i className={classes}></i>
        </button>
      </div>
    );
  }
}

export default Like;
