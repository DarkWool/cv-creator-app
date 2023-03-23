import { Fragment } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";

export function Education({ step, data, onAddEducation, onChange, onDeleteEntry }) {
  const entries = data.length;
  const educationBlocks = data.map((education, index) => {
    return (
      <Fragment key={education.id}>
        {index !== 0 && <hr className="edit-block_separator"></hr>}

        <div className="edit-block_form-entry">
          <div className="flex-2-rows">
            <InputWrapper>
              <Input
                label="School name"
                id={`cvSchool${index}`}
                type="text"
                value={education.school}
                onChange={(e) => onChange(education.id, "school", e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Degree, certification or title"
                id={`cvDegree${index}`}
                type="text"
                value={education.degree}
                onChange={(e) => onChange(education.id, "degree", e.target.value)}
              />
            </InputWrapper>
          </div>

          <div className="flex-2-rows">
            <InputWrapper>
              <Input
                label="Starting date"
                id={`cvEducationFrom${index}`}
                type="text"
                value={education.from}
                onChange={(e) => onChange(education.id, "from", e.target.value)}
                placeholder="MM/YYYY"
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Ending date"
                id={`cvEducationTo${index}`}
                type="text"
                value={education.to}
                onChange={(e) => onChange(education.id, "to", e.target.value)}
                placeholder="MM/YYYY"
              />
            </InputWrapper>
          </div>

          {entries > 1 && (
            <button
              type="button"
              className="btn-delete"
              onClick={() => onDeleteEntry(education.id)}
            >
              Delete Entry
            </button>
          )}
        </div>
      </Fragment>
    );
  });

  return (
    <section className="edit-block">
      <FormHeader
        step={step}
        title={"Education"}
        buttonText={"Add more education"}
        clickHandler={onAddEducation}
      />
      <FormContainer>{educationBlocks}</FormContainer>
    </section>
  );
}
