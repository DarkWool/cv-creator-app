import { Component, Fragment } from "react";
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
          {userExperience.map((exp, index) => {
            return (
              <Fragment key={exp.id}>
                <div className="edit-block_form-entry">
                  <div className="flex-2-rows">
                    <div className="input-wrapper">
                      <label htmlFor={`cvPosition${index}`}>Your Position</label>
                      <input
                        id={`cvPosition${index}`}
                        name={`cvPosition${index}`}
                        type="text"
                        value={exp.position}
                        onChange={(e) => handleChanges(exp.id, "position", e.target.value)}
                      />
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor={`cvCompany${index}`}>Company</label>
                      <input
                        id={`cvCompany${index}`}
                        name={`cvCompany${index}`}
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleChanges(exp.id, "company", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex-2-rows">
                    <div className="input-wrapper">
                      <label htmlFor={`cvLocation${index}`}>Location</label>
                      <input
                        id={`cvLocation${index}`}
                        name={`cvLocation${index}`}
                        type="text"
                        value={exp.location}
                        onChange={(e) => handleChanges(exp.id, "location", e.target.value)}
                      />
                    </div>
                    <div className="flex-2-rows">
                      <div className="input-wrapper">
                        <label htmlFor={`cvExperienceFrom${index}`}>From</label>
                        <input
                          id={`cvExperienceFrom${index}`}
                          name={`cvExperienceFrom${index}`}
                          type="text"
                          value={exp.from}
                          onChange={(e) => handleChanges(exp.id, "from", e.target.value)}
                        />
                      </div>
                      <div className="input-wrapper">
                        <label htmlFor={`cvExperienceTo${index}`}>To</label>
                        <input
                          id={`cvExperienceTo${index}`}
                          name={`cvExperienceTo${index}`}
                          type="text"
                          value={exp.to}
                          onChange={(e) => handleChanges(exp.id, "to", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor={`cvJobDetails${index}`}>Tasks / Achievements</label>
                    <textarea
                      id={`cvJobDetails${index}`}
                      name={`cvJobDetails${index}`}
                      value={exp.details}
                      rows={5}
                      onChange={(e) => handleChanges(exp.id, "details", e.target.value)}
                    />
                  </div>

                  {experienceBlocks > 1 && (
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => handleChanges(exp.id)}
                    >
                      Delete Entry
                    </button>
                  )}
                </div>

                {index !== experienceBlocks - 1 && <hr className="edit-block_separator"></hr>}
              </Fragment>
            );
          })}
        </FormContainer>
      </section>
    );
  }
}
