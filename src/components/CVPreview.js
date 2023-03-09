import { Component } from "react";

export class CVPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo } = this.props;

    return (
      <div>
        <p>
          <strong>Name:</strong>
        </p>
        <p>{generalInfo.name.trim()}</p>
        <p>
          <strong>Last Name:</strong>
        </p>
        <p>{generalInfo.lastName.trim()}</p>
        <p>
          <strong>Profession:</strong>
        </p>
        <p>{generalInfo.profession.trim()}</p>
        <p>
          <strong>Description (About me):</strong>
        </p>
        <p>{generalInfo.aboutMe.trim()}</p>
      </div>
    );
  }
}
