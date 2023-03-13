import { Component } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";

export class Languages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userLanguages, onNewLanguage, onModifyLanguage } = this.props;

    return (
      <section className="edit-block">
        <FormHeader
          step={this.props.step}
          title={"Languages"}
          buttonText={"Add Language"}
          clickHandler={onNewLanguage}
        />
        <FormContainer>
          {userLanguages.map((language, index) => {
            return (
              <div className="input-wrapper row" key={language.id}>
                <label htmlFor={`lang${index}`}></label>
                <input
                  type="text"
                  placeholder="New language..."
                  id={`lang${index}`}
                  name={`lang${index}`}
                  aria-label="Language"
                  value={language.lang}
                  onChange={(e) => onModifyLanguage(language.id, "lang", e.target.value)}
                />
                <label htmlFor={`langProficiency${index}`}></label>
                <select
                  value={language.proficiency}
                  onChange={(e) => onModifyLanguage(language.id, "proficiency", e.target.value)}
                  id={`langProficiency${index}`}
                  name={`langProficiency${index}`}
                  aria-label="Select language proficiency"
                >
                  <option value="null" disabled>
                    Select language proficiency
                  </option>
                  <option value="elementary">Elementary</option>
                  <option value="limited">Limited</option>
                  <option value="professional">Professional</option>
                  <option value="fullProfessional">Full Professional</option>
                  <option value="native">Native / Bilingual</option>
                </select>

                {userLanguages.length > 1 && (
                  <button type="button" onClick={() => onModifyLanguage(language.id)}>
                    Delete
                  </button>
                )}
              </div>
            );
          })}
        </FormContainer>
      </section>
    );
  }
}
