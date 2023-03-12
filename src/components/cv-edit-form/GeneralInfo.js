import { Component } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="edit-block">
        <FormHeader step={this.props.step} title={"General Information"} />
        <FormContainer>
          <div className="flex-2-rows">
            <div className="input-wrapper">
              <label htmlFor="cvName">Name</label>
              <input
                id="cvName"
                name="cvName"
                type="text"
                onChange={(e) => this.props.handleChanges("name", e.target.value)}
                value={this.props.name}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="cvLastName">Last Name</label>
              <input
                id="cvLastName"
                name="cvLastName"
                type="text"
                onChange={(e) => this.props.handleChanges("lastName", e.target.value)}
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
              onChange={(e) => this.props.handleChanges("profession", e.target.value)}
              value={this.props.profession}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="cvAddress">Address</label>
            <input
              id="cvAddress"
              name="cvAddress"
              type="text"
              onChange={(e) => this.props.handleChanges("address", e.target.value)}
              value={this.props.address}
            />
          </div>
          <div className="flex-2-rows">
            <div className="input-wrapper">
              <label htmlFor="cvLinkedIn">LinkedIn Profile</label>
              <input
                id="cvLinkedIn"
                name="cvLinkedIn"
                type="text"
                onChange={(e) => this.props.handleChanges("linkedIn", e.target.value)}
                value={this.props.linkedIn}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="cvPortfolio">Portfolio</label>
              <input
                id="cvPortfolio"
                name="cvPortfolio"
                type="url"
                onChange={(e) => this.props.handleChanges("portfolio", e.target.value)}
                value={this.props.portfolio}
              />
            </div>
          </div>
          <div className="flex-2-rows">
            <div className="input-wrapper">
              <label htmlFor="cvEmail">Email</label>
              <input
                id="cvEmail"
                name="cvEmail"
                type="email"
                onChange={(e) => this.props.handleChanges("email", e.target.value)}
                value={this.props.email}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="cvPhoneNumber">Phone number</label>
              <input
                id="cvPhoneNumber"
                name="cvPhoneNumber"
                type="tel"
                onChange={(e) => this.props.handleChanges("phoneNumber", e.target.value)}
                value={this.props.phoneNumber}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="cvAboutMe">Description (About me)</label>
            <textarea
              id="cvAboutMe"
              name="cvAboutMe"
              rows="8"
              onChange={(e) => this.props.handleChanges("aboutMe", e.target.value)}
              value={this.props.aboutMe}
            />
          </div>
        </FormContainer>
      </section>
    );
  }
}
