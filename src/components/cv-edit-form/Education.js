import { Component, Fragment } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";

export class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userEducation, onNewEducationBlock, handleChanges } = this.props;
    const educationBlocks = userEducation.length;

    return (
      <section className="edit-block">
        <FormHeader
          step={this.props.step}
          title={"Education"}
          buttonText={"Add more education"}
          clickHandler={onNewEducationBlock}
        />
        <FormContainer>
          {userEducation.map((education, index) => {
            return (
              <Fragment key={education.id}>
                <div className="edit-block_form-entry">
                  <div className="flex-2-rows">
                    <div className="input-wrapper">
                      <label htmlFor={`cvSchool${index}`}>School name</label>
                      <input
                        id={`cvSchool${index}`}
                        name={`cvSchool${index}`}
                        type="text"
                        onChange={(e) => handleChanges(education.id, "school", e.target.value)}
                        value={education.school}
                      />
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor={`cvDegree${index}`}>Degree, certificacion or title</label>
                      <input
                        id={`cvDegree${index}`}
                        name={`cvDegree${index}`}
                        type="text"
                        onChange={(e) => handleChanges(education.id, "degree", e.target.value)}
                        value={education.degree}
                      />
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor={`cvDate${index}`}>Date</label>
                    <input
                      id={`cvDate${index}`}
                      name={`cvDate${index}`}
                      type="date"
                      onChange={(e) => handleChanges(education.id, "date", e.target.value)}
                      value={education.date}
                    />
                  </div>

                  {educationBlocks > 1 && (
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => handleChanges(education.id)}
                    >
                      Delete Entry
                    </button>
                  )}
                </div>
                {index !== educationBlocks - 1 && <hr className="edit-block_separator"></hr>}
              </Fragment>
            );
          })}
        </FormContainer>
      </section>
    );
  }
}
