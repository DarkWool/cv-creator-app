import React, { Component } from "react";
import { Header } from "./components/Header";
import { CVForm } from "./components/CVForm";
import { CVPreview } from "./components/CVPreview";
import { init } from "emoji-mart";
import data from "@emoji-mart/data";
import uniqid from "uniqid";

const language = {
  id: "",
  lang: "",
  proficiency: "null",
};

const education = {
  id: "",
  school: "",
  degree: "",
  date: "",
};

const experience = {
  id: "",
  position: "",
  company: "",
  location: "",
  from: "",
  to: "",
  details: "",
};

const interest = {
  id: "",
  iconId: "helmet_with_white_cross",
  value: "",
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
    skills: [
      { id: uniqid(), value: "" },
      { id: uniqid(), value: "" },
      { id: uniqid(), value: "" },
    ],
    languages: [
      { ...language, id: uniqid() },
      { ...language, id: uniqid() },
    ],
    education: [{ ...education, id: uniqid() }],
    experience: [{ ...experience, id: uniqid() }],
    interests: [
      { ...interest, id: uniqid() },
      { ...interest, id: uniqid() },
    ],
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
    const updatedEducation = [{ ...education, id: uniqid() }, ...this.state.education];
    this.setState({
      ...this.state,
      education: updatedEducation,
    });
  };

  updateOrDeleteEducation = (id, field, value) => {
    // Modify value
    if (value || value === "") {
      const updatedEducation = this.state.education.map((education) => {
        if (id === education.id) {
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
    const updatedEducation = this.state.education.filter((education) => education.id !== id);
    this.setState({
      ...this.state,
      education: updatedEducation,
    });
  };

  handleNewExperienceBlock = () => {
    const updatedExperience = [{ ...experience, id: uniqid() }, ...this.state.experience];
    this.setState({
      ...this.state,
      experience: updatedExperience,
    });
  };

  updateOrDeleteExperience = (id, field, value) => {
    // Modify value
    if (value || value === "") {
      const updatedExperience = this.state.experience.map((experience) => {
        if (id === experience.id) {
          return {
            ...experience,
            [field]: value,
          };
        }
        return experience;
      });

      return this.setState({
        ...this.state,
        experience: updatedExperience,
      });
    }

    // Delete
    const updatedExperience = this.state.experience.filter((exp) => id !== exp.id);
    this.setState({
      ...this.state,
      experience: updatedExperience,
    });
  };

  handleNewSkill = () => {
    const skills = [{ id: uniqid(), value: "" }, ...this.state.skills];
    this.setState({
      ...this.state,
      skills,
    });
  };

  handleEditSkill = (id, value) => {
    const skills = this.state.skills.map((skill) => {
      if (skill.id === id) {
        return {
          ...skill,
          value,
        };
      }

      return skill;
    });

    this.setState({
      ...this.state,
      skills,
    });
  };

  handleDeleteSkill = (id) => {
    const skills = this.state.skills.filter((skill) => id !== skill.id);
    this.setState({
      ...this.state,
      skills,
    });
  };

  handleNewLanguage = () => {
    const languages = [{ ...language, id: uniqid() }, ...this.state.languages];
    this.setState({
      ...this.state,
      languages,
    });
  };

  handleModifyLanguage = (id, field, value) => {
    // Modify value
    if (value || value === "") {
      const updatedLanguages = this.state.languages.map((language) => {
        if (id === language.id) {
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
    const languages = this.state.languages.filter((language) => language.id !== id);
    this.setState({
      ...this.state,
      languages,
    });
  };

  handleNewInterest = () => {
    this.setState({
      ...this.state,
      interests: [{ ...interest, id: uniqid() }, ...this.state.interests],
    });
  };

  updateOrDeleteInterest = (id, field, value) => {
    if (value || value === "") {
      const newInterests = this.state.interests.map((interest) => {
        if (id === interest.id) {
          return {
            ...interest,
            [field]: value,
          };
        } else return interest;
      });

      this.setState({
        ...this.state,
        interests: newInterests,
      });
      return;
    }

    // Delete interest
    const updatedInterests = this.state.interests.filter((interest) => id !== interest.id);
    this.setState({
      ...this.state,
      interests: updatedInterests,
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
        userExperience={this.state.experience}
        userInterests={this.state.interests}
        handlePersonalChanges={this.handlePersonalChanges}
        handleNewEducationBlock={this.handleNewEducationBlock}
        handleEducationChanges={this.updateOrDeleteEducation}
        handleNewExperienceBlock={this.handleNewExperienceBlock}
        handleExperienceChanges={this.updateOrDeleteExperience}
        handleInterestsChanges={this.updateOrDeleteInterest}
        handleNewSkill={this.handleNewSkill}
        handleEditSkill={this.handleEditSkill}
        handleDeleteSkill={this.handleDeleteSkill}
        handleNewLanguage={this.handleNewLanguage}
        handleModifyLanguage={this.handleModifyLanguage}
        handleNewInterest={this.handleNewInterest}
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

// Initialize emoji-mart
init({ data });

export default App;
