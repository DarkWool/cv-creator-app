import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";
import { Select } from "../FormElements/Select";
import { Button } from "../Button.js";

const PLACEHOLDERS = ["Spanish", "English", "Mandarin Chinese", "German", "Arabic", "Hindi"];

export function Languages({ step, data, onAddLanguage, onChange, onDeleteEntry }) {
  const entries = data.length;
  const langProficiencyOptions = [
    { value: "null", name: "Select language proficiency" },
    { value: "elementary", name: "Elementary" },
    { value: "limited", name: "Limited" },
    { value: "professional", name: "Professional" },
    { value: "fullProfessional", name: "Full Professional" },
    { value: "native", name: "Native / Bilingual" },
  ];

  return (
    <section className="edit-block">
      <FormHeader
        step={step}
        title={"Languages"}
        desc={
          <p>
            By listing the languages you know and your proficiency level in each, you can
            demonstrate your ability to communicate effectively with people from different cultures
            and increase your appeal to potential employers.
          </p>
        }
        button={
          <Button
            variant="add"
            onClick={onAddLanguage}
            title="Add new language"
            content="Add Language"
          />
        }
      />
      <FormContainer>
        {data.map((language, index) => {
          return (
            <InputWrapper variant="row" key={language.id}>
              <Input
                id={`cvLang${index}`}
                type="text"
                value={language.name}
                onChange={(e) => onChange(language.id, "name", e.target.value)}
                placeholder={
                  PLACEHOLDERS[index] ? `e.g. ${PLACEHOLDERS[index]}` : "New language..."
                }
              />
              <Select
                id={`cvLangProficiency${index}`}
                value={language.proficiency}
                onChange={(e) => onChange(language.id, "proficiency", e.target.value)}
                options={langProficiencyOptions}
              />

              {entries > 1 && (
                <Button
                  variant="delete"
                  onClick={() => onDeleteEntry(language.id)}
                  title="Delete language"
                />
              )}
            </InputWrapper>
          );
        })}
      </FormContainer>
    </section>
  );
}
