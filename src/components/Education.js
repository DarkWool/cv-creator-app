import { Component } from "react";
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
              <>
                <div className="edit-block_form-entry">
                  <div className="flex-2-rows">
                    <div className="input-wrapper">
                      <label htmlFor="cvSchool">School name</label>
                      <input
                        id="cvSchool"
                        name="cvSchool"
                        type="text"
                        onChange={(e) => handleChanges(index, "school", e.target.value)}
                        value={education.school}
                      />
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="cvDegree">Degree, certificacion or title</label>
                      <input
                        id="cvDegree"
                        name="cvDegree"
                        type="text"
                        onChange={(e) => handleChanges(index, "degree", e.target.value)}
                        value={education.degree}
                      />
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="cvDate">Date</label>
                    <input
                      id="cvDate"
                      name="cvDate"
                      type="date"
                      onChange={(e) => handleChanges(index, "date", e.target.value)}
                      value={education.date}
                    />
                  </div>

                  {educationBlocks > 1 && (
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => handleChanges(index)}
                    >
                      Delete Entry
                    </button>
                  )}
                </div>
                {index !== educationBlocks - 1 && <hr className="edit-block_separator"></hr>}
              </>
            );
          })}
        </FormContainer>
      </section>
    );
  }
}
