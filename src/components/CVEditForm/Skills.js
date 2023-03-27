import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";
import { Button } from "../Button.js";

const PLACEHOLDERS = [
  "Strong communication",
  "JavaScript",
  "Adaptability",
  "CSS",
  "Python",
  "Cybersecurity",
  "Blender",
  "Photoshop",
];

export function Skills({ step, data, onAddSkill, onChange, onDeleteEntry }) {
  const entries = data.length;

  return (
    <section className="edit-block">
      <FormHeader
        step={step}
        title={"Skills"}
        desc={
          <p>
            Here is an opportunity to showcase your relevant abilities and qualifications for the
            job. Be specific about your skills and match them with the requirements of the job
            you're applying for. Include technical skills, communication skills, and problem-solving
            abilities.
          </p>
        }
        button={
          <Button variant="add" onClick={onAddSkill} title="Add new skill" content="Add Skill" />
        }
      />
      <FormContainer>
        {data.map((skill, index) => {
          return (
            <InputWrapper variant="row" key={skill.id}>
              <Input
                id={`cvSkill${index}`}
                type="text"
                value={skill.name}
                onChange={(e) => onChange(skill.id, e.target.value)}
                placeholder={PLACEHOLDERS[index] ? `e.g. ${PLACEHOLDERS[index]}` : "New skill..."}
              />
              {entries > 1 && (
                <Button
                  variant="delete"
                  onClick={() => onDeleteEntry(skill.id)}
                  title="Delete skill"
                />
              )}
            </InputWrapper>
          );
        })}
      </FormContainer>
    </section>
  );
}
