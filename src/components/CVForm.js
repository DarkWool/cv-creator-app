import "../styles/CVForm.css";
import { Component } from "react";
import { GeneralInfo } from "./GeneralInfo";
import { Skills } from "./Skills";
import { Languages } from "./Languages";
import { Education } from "./Education";

export class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo, userSkills, userLanguages, userEducation } = this.props;

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
      </>
    );
  }
}
