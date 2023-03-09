import { Component } from "react";
import { FormContainer } from "./FormContainer";

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="edit-block">
        <div className="edit-block_header">
          <div className="edit-block_step-info">
            <span className="edit-block_step">1</span>
            <h2 className="edit-block_title">General Information</h2>
          </div>
          <div>
            <p>
              Etiam ullamcorper consectetur nunc volutpat fermentum. Sed vel purus eu ligula maximus
              viverra. Ut mollis in augue in pharetra. Duis ornare ante libero. Integer suscipit
              pretium placerat. Aliquam neque enim, placerat ut iaculis a, molestie sed magna.
              Suspendisse aliquam feugiat libero, sit amet placerat dui porta a.
            </p>
          </div>
        </div>
        <FormContainer>
          <div className="flex-2-rows">
            <div className="input-wrapper">
              <label htmlFor="cvName">Name</label>
              <input
                id="cvName"
                name="cvName"
                type="text"
                onChange={(e) => this.props.handleEditChanges("name", e.target.value)}
                value={this.props.name}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="cvLastName">Last Name</label>
              <input
                id="cvLastName"
                name="cvLastName"
                type="text"
                onChange={(e) => this.props.handleEditChanges("lastName", e.target.value)}
                value={this.props.lastName}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="cvProfession">Profession</label>
            <input
              id="cvProfession"
              name="cvProfession"
              type="text"
              onChange={(e) => this.props.handleEditChanges("profession", e.target.value)}
              value={this.props.profession}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="cvAboutMe">Description (About me)</label>
            <textarea
              id="cvAboutMe"
              name="cvAboutMe"
              rows="8"
              onChange={(e) => this.props.handleEditChanges("aboutMe", e.target.value)}
              value={this.props.aboutMe}
            />
          </div>
        </FormContainer>
      </section>
    );
  }
}
