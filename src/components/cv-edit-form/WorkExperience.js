import { Fragment } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";
import { Textarea } from "../FormElements/Textarea";

export function WorkExperience({ step, data, onAddExperience, onChange, onDeleteEntry }) {
  const entries = data.length;
  const experienceBlocks = data.map((exp, index) => {
    return (
      <Fragment key={exp.id}>
        {index !== 0 && <hr className="edit-block_separator"></hr>}

        <div className="edit-block_form-entry">
          <div className="flex-2-rows">
            <InputWrapper>
              <Input
                label="Your Position"
                id={`cvPosition${index}`}
                type="text"
                value={exp.position}
                onChange={(e) => onChange(exp.id, "position", e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="Company"
                id={`cvCompany${index}`}
                type="text"
                value={exp.company}
                onChange={(e) => onChange(exp.id, "company", e.target.value)}
              />
            </InputWrapper>
          </div>
          <div className="flex-2-rows">
            <InputWrapper>
              <Input
                label="Location"
                id={`cvLocation${index}`}
                type="text"
                value={exp.location}
                onChange={(e) => onChange(exp.id, "location", e.target.value)}
              />
            </InputWrapper>
            <div className="flex-2-rows">
              <InputWrapper>
                <Input
                  label="From"
                  id={`cvExperienceFrom${index}`}
                  type="text"
                  value={exp.from}
                  onChange={(e) => onChange(exp.id, "from", e.target.value)}
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  label="To"
                  id={`cvExperienceTo${index}`}
                  type="text"
                  value={exp.to}
                  onChange={(e) => onChange(exp.id, "to", e.target.value)}
                />
              </InputWrapper>
            </div>
          </div>

          <InputWrapper>
            <Textarea
              label="Tasks / Achievements"
              id={`cvJobDetails${index}`}
              value={exp.details}
              onInputChange={(e) => onChange(exp.id, "details", e.target.value)}
              rows={5}
              resize="y"
            />
          </InputWrapper>

          {entries > 1 && (
            <button type="button" className="btn-delete" onClick={() => onDeleteEntry(exp.id)}>
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
        title={"Work Experience"}
        buttonText="Add more experience"
        clickHandler={onAddExperience}
      />
      <FormContainer>{experienceBlocks}</FormContainer>
    </section>
  );
}
