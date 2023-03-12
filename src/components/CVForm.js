import "../styles/CVForm.css";
import { Component } from "react";
import { GeneralInfo } from "./cv-edit-form/GeneralInfo";
import { Skills } from "./cv-edit-form/Skills";
import { Languages } from "./cv-edit-form/Languages";
import { Education } from "./cv-edit-form/Education";
import { WorkExperience } from "./cv-edit-form/WorkExperience";

export class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo, userSkills, userLanguages, userEducation, userExperience } = this.props;

    return (
      <>
        <GeneralInfo
          handleChanges={this.props.handlePersonalChanges}
          name={personalInfo.name}
          lastName={personalInfo.lastName}
          profession={personalInfo.profession}
          aboutMe={personalInfo.aboutMe}
          address={personalInfo.address}
          linkedIn={personalInfo.linkedIn}
          portfolio={personalInfo.portfolio}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          step={1}
        />
        <Skills
          userSkills={userSkills}
          onNewSkill={this.props.handleNewSkill}
          onDeleteSkill={this.props.handleDeleteSkill}
          onEditSkill={this.props.handleEditSkill}
          step={2}
        />
        <Languages
          userLanguages={userLanguages}
          onNewLanguage={this.props.handleNewLanguage}
          onModifyLanguage={this.props.handleModifyLanguage}
          step={3}
        />
        <Education
          userEducation={userEducation}
          onNewEducationBlock={this.props.handleNewEducationBlock}
          handleChanges={this.props.handleEducationChanges}
          step={4}
        />
        <WorkExperience
          userExperience={userExperience}
          onNewExperienceBlock={this.props.handleNewExperienceBlock}
          handleChanges={this.props.handleExperienceChanges}
          step={5}
        />
      </>
    );
  }
}
