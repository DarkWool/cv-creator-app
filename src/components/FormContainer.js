import React, { Component } from "react";

export class FormContainer extends Component {
  render() {
    return <div className="edit-block_form">{this.props.children}</div>;
  }
}
