import React, { Component } from "react";
import { Header } from "./components/Header";
import { CVForm } from "./components/CVForm";

class App extends Component {
  state = {
    isPreviewActive: false,
    name: "",
    lastName: "",
    profession: "",
    aboutMe: "",
  };

  togglePreview = (value) => {
    this.setState({
      ...this.state,
      isPreviewActive: value,
    });
  };

  handleEditChanges = (field, value) => {
    this.setState({
      ...this.state,
      [field]: value,
    });
  };

  render() {
    const currPage = this.state.isPreviewActive ? (
      <div>
        Preview...
        <p>Name:</p>
        <p>{this.state.name.trim()}</p>
        <p>Last Name:</p>
        <p>{this.state.lastName.trim()}</p>
        <p>Profession:</p>
        <p>{this.state.profession.trim()}</p>
        <p>Description (About me): </p>
        <p>{this.state.aboutMe.trim()}</p>
      </div>
    ) : (
      <CVForm generalInfo={this.state} handleEditChanges={this.handleEditChanges} />
    );

    return (
      <>
        <Header onTogglePreview={this.togglePreview} />
        <main className="content-margin">{currPage}</main>
      </>
    );
  }
}

export default App;
