import { Component } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";

export class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userExperience, onNewExperienceBlock, handleChanges } = this.props;
    const experienceBlocks = userExperience.length;

    return (
      <section className="edit-block">
        <FormHeader
          step={this.props.step}
          title={"Work Experience"}
          buttonText="Add more experience"
          clickHandler={onNewExperienceBlock}
        />
        <FormContainer>
          {userExperience.map((experience, index) => {
            return (
              <>
                <div className="edit-block_form-entry">
                  <div className="flex-2-rows">
                    <div className="input-wrapper">
                      <label htmlFor="cvPosition">Your Position</label>
                      <input
                        id="cvPosition"
                        name="cvPosition"
                        type="text"
                        value={experience.position}
                        onChange={(e) => handleChanges(index, "position", e.target.value)}
                      />
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="cvCompany">Company</label>
                      <input
                        id="cvCompany"
                        name="cvCompany"
                        type="text"
                        value={experience.company}
                        onChange={(e) => handleChanges(index, "company", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex-2-rows">
                    <div className="input-wrapper">
                      <label htmlFor="cvLocation">Location</label>
                      <input
                        id="cvLocation"
                        name="cvLocation"
                        type="text"
                        value={experience.location}
                        onChange={(e) => handleChanges(index, "location", e.target.value)}
                      />
                    </div>
                    <div className="flex-2-rows">
                      <div className="input-wrapper">
                        <label htmlFor="cvExperienceFrom">From</label>
                        <input
                          id="cvExperienceFrom"
                          name="cvExperienceFrom"
                          type="text"
                          value={experience.from}
                          onChange={(e) => handleChanges(index, "from", e.target.value)}
                        />
                      </div>
                      <div className="input-wrapper">
                        <label htmlFor="cvExperienceTo">To</label>
                        <input
                          id="cvExperienceTo"
                          name="cvExperienceTo"
                          type="text"
                          value={experience.to}
                          onChange={(e) => handleChanges(index, "to", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="cvJobDetails">Tasks / Achievements</label>
                    <textarea
                      id="cvJobDetails"
                      name="cvJobDetails"
                      value={experience.details}
                      rows={5}
                      onChange={(e) => handleChanges(index, "details", e.target.value)}
                    />
                  </div>

                  {experienceBlocks > 1 && (
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => handleChanges(index)}
                    >
                      Delete Entry
                    </button>
                  )}
                </div>

                {index !== experienceBlocks - 1 && <hr className="edit-block_separator"></hr>}
              </>
            );
          })}
        </FormContainer>
      </section>
    );
  }
}
