import "../styles/CVForm.css";
import { Component } from "react";
import { GeneralInfo } from "./GeneralInfo";

export class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo } = this.props;

    return (
      <>
        <GeneralInfo
          handleEditChanges={this.props.handleEditChanges}
          name={generalInfo.name}
          lastName={generalInfo.lastName}
          profession={generalInfo.profession}
          aboutMe={generalInfo.aboutMe}
        />
      </>
    );
  }
}
