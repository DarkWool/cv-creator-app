import { Fragment } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";
import { Textarea } from "../FormElements/Textarea";
import { Button } from "../Button.js";

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
                  placeholder="MM/YYYY"
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  label="To"
                  id={`cvExperienceTo${index}`}
                  type="text"
                  value={exp.to}
                  onChange={(e) => onChange(exp.id, "to", e.target.value)}
                  placeholder="MM/YYYY"
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
              placeholder="Describe your main tasks and responsibilities in this role, as well as any achievements or accomplishments you are particularly proud of. Be specific and use metrics or numbers to quantify your impact whenever possible."
            />
          </InputWrapper>

          {entries > 1 && (
            <Button
              variant="delete"
              onClick={() => onDeleteEntry(exp.id)}
              title="Delete work experience entry"
              content="Delete Entry"
              extraClasses="btn-icon-delete-long"
            />
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
        desc={
          <>
            <p>
              Showcase your professional accomplishments and demonstrate your ability to contribute
              to an organization.
            </p>
            <p>
              In addition to the basics, you should also include a brief description of your duties
              and accomplishments while in the role. This can help potential employers understand
              the scope of your responsibilities and the impact of it.
            </p>
          </>
        }
        button={
          <Button
            variant="add"
            onClick={onAddExperience}
            title="Add more work experience"
            content="Add more experience"
          />
        }
      />
      <FormContainer>{experienceBlocks}</FormContainer>
    </section>
  );
}
