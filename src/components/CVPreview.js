import { Component } from "react";

export class CVPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personalInfo } = this.props;

    return (
      <div>
        <p>
          <strong>Name:</strong>
        </p>
        <p>{personalInfo.name.trim()}</p>
        <p>
          <strong>Last Name:</strong>
        </p>
        <p>{personalInfo.lastName.trim()}</p>
        <p>
          <strong>Profession:</strong>
        </p>
        <p>{personalInfo.profession.trim()}</p>
        <p>
          <strong>Description (About me):</strong>
        </p>
        <p>{personalInfo.aboutMe.trim()}</p>
      </div>
    );
  }
}
