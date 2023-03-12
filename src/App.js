import React, { Component } from "react";
import { Header } from "./components/Header";
import { CVForm } from "./components/CVForm";
import { CVPreview } from "./components/CVPreview";

const language = {
  lang: "",
  proficiency: "null",
};

const education = {
  school: "",
  degree: "",
  date: "",
};

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
    languages: [{ ...language }, { ...language }],
    education: [{ ...education }],
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

  handleNewEducationBlock = () => {
    const updatedEducation = [{ ...education }, ...this.state.education];
    this.setState({
      ...this.state,
      education: updatedEducation,
    });
  };

  updateOrDeleteEducation = (id, field, value) => {
    // Modify value
    if (value) {
      const updatedEducation = this.state.education.map((education, index) => {
        if (id === index) {
          return {
            ...education,
            [field]: value,
          };
        }
        return education;
      });

      return this.setState({
        ...this.state,
        education: updatedEducation,
      });
    }

    // Delete
    const updatedEducation = [...this.state.education];
    updatedEducation.splice(id, 1);

    this.setState({
      ...this.state,
      education: updatedEducation,
    });
  };

  handleNewSkill = () => {
    const skills = ["", ...this.state.skills];
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

  handleNewLanguage = () => {
    const languages = [{ ...language }, ...this.state.languages];
    this.setState({
      ...this.state,
      languages,
    });
  };

  handleModifyLanguage = (id, field, value) => {
    // Modify value
    if (value) {
      const updatedLanguages = this.state.languages.map((language, index) => {
        if (id === index) {
          return {
            ...language,
            [field]: value,
          };
        }
        return language;
      });

      this.setState({
        ...this.state,
        languages: updatedLanguages,
      });

      return;
    }

    // Remove
    const languages = [...this.state.languages];
    languages.splice(id, 1);
    this.setState({
      ...this.state,
      languages,
    });
  };

  render() {
    const currPage = this.state.isPreviewActive ? (
      <CVPreview personalInfo={this.state.personalInfo} />
    ) : (
      <CVForm
        personalInfo={this.state.personalInfo}
        userSkills={this.state.skills}
        userLanguages={this.state.languages}
        userEducation={this.state.education}
        handlePersonalChanges={this.handlePersonalChanges}
        handleNewEducationBlock={this.handleNewEducationBlock}
        handleEducationChanges={this.updateOrDeleteEducation}
        handleNewSkill={this.handleNewSkill}
        handleEditSkill={this.handleEditSkill}
        handleDeleteSkill={this.handleDeleteSkill}
        handleNewLanguage={this.handleNewLanguage}
        handleModifyLanguage={this.handleModifyLanguage}
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
