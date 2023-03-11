import React, { Component } from "react";
import { Header } from "./components/Header";
import { CVForm } from "./components/CVForm";
import { CVPreview } from "./components/CVPreview";

class App extends Component {
  state = {
    isPreviewActive: false,
    name: "",
    lastName: "",
    profession: "",
    aboutMe: "",
    address: "",
    linkedIn: "",
    portfolio: "",
    email: "",
    phoneNumber: "",
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
      <CVPreview
        generalInfo={{
          name: this.state.name,
          lastName: this.state.lastName,
          profession: this.state.profession,
          aboutMe: this.state.aboutMe,
        }}
      />
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
