import { Component } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";

export class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userSkills, onNewSkill, onDeleteSkill, onEditSkill } = this.props;

    return (
      <section className="edit-block">
        <FormHeader
          step={this.props.step}
          title={"Skills"}
          buttonText={"Add Skill"}
          clickHandler={onNewSkill}
        />
        <FormContainer>
          {userSkills.map((skill, index) => {
            return (
              <div className="input-wrapper row" key={skill.id}>
                <label htmlFor={`cvSkill${index}`}></label>
                <input
                  type="text"
                  placeholder="New skill..."
                  id={`cvSkill${index}`}
                  name={`cvSkill${index}`}
                  value={skill.value}
                  onChange={(e) => onEditSkill(skill.id, e.target.value)}
                />
                {userSkills.length > 1 && (
                  <button type="button" onClick={() => onDeleteSkill(skill.id)}>
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
