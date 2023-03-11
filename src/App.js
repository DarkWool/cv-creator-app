import React, { Component } from "react";
import { Header } from "./components/Header";
import { CVForm } from "./components/CVForm";
import { CVPreview } from "./components/CVPreview";

class App extends Component {
  state = {
    isPreviewActive: false,
    personalInfo: {
      name: "",
      lastName: "",
      profession: "",
      aboutMe: "",
      address: "",
      linkedIn: "",
      portfolio: "",
      email: "",
      phoneNumber: "",
    },
    skills: ["", "", ""],
  };

  togglePreview = (value) => {
    this.setState({
      ...this.state,
      isPreviewActive: value,
    });
  };

  handlePersonalChanges = (field, value) => {
    this.setState({
      ...this.state,
      personalInfo: {
        ...this.state.personalInfo,
        [field]: value,
      },
    });
  };

  handleNewSkill = () => {
    const skills = [...this.state.skills, ""];
    this.setState({
      ...this.state,
      skills,
    });
  };

  handleEditSkill = (id, value) => {
    const skills = this.state.skills;
    skills[id] = value;
    this.setState({
      ...this.state,
      skills,
    });
  };

  handleDeleteSkill = (id) => {
    const skills = this.state.skills.filter((skill, index) => index !== id);
    this.setState({
      ...this.state,
      skills,
    });
  };

  render() {
    const currPage = this.state.isPreviewActive ? (
      <CVPreview personalInfo={this.state.personalInfo} />
    ) : (
      <CVForm
        personalInfo={this.state.personalInfo}
        userSkills={this.state.skills}
        handlePersonalChanges={this.handlePersonalChanges}
        handleNewSkill={this.handleNewSkill}
        handleEditSkill={this.handleEditSkill}
        handleDeleteSkill={this.handleDeleteSkill}
      />
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
