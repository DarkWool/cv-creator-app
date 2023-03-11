import "../styles/CVForm.css";
import { Component } from "react";
import { GeneralInfo } from "./GeneralInfo";
import { Skills } from "./Skills";

export class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo, userSkills } = this.props;

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
      </>
    );
  }
}
