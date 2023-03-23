import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";

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
      <FormHeader step={step} title={"Skills"} buttonText={"Add Skill"} clickHandler={onAddSkill} />
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
                <button type="button" onClick={() => onDeleteEntry(skill.id)}>
                  Delete
                </button>
              )}
            </InputWrapper>
          );
        })}
      </FormContainer>
    </section>
  );
}