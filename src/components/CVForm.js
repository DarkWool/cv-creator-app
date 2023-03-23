import "../styles/CVForm.css";
import { GeneralInfo } from "./cv-edit-form/GeneralInfo";
import { Skills } from "./cv-edit-form/Skills";
import { Languages } from "./cv-edit-form/Languages";
import { Education } from "./cv-edit-form/Education";
import { WorkExperience } from "./cv-edit-form/WorkExperience";
import { Interests } from "./cv-edit-form/Interests";

export function CVForm(props) {
  return (
    <>
      <GeneralInfo step={1} data={props.personalData} onChange={props.onPersonalChanges} />
      <Education
        step={2}
        data={props.educationData}
        onAddEducation={props.onAddEducation}
        onChange={props.onChangeEducation}
        onDeleteEntry={props.onDeleteEducation}
      />
      <WorkExperience
        step={3}
        data={props.workData}
        onAddExperience={props.onAddExperience}
        onChange={props.onChangeExperience}
        onDeleteEntry={props.onDeleteExperience}
      />
      <Skills
        step={4}
        data={props.skills}
        onAddSkill={props.onAddSkill}
        onChange={props.onChangeSkill}
        onDeleteEntry={props.onSkillDelete}
      />
      <Languages
        step={5}
        data={props.languages}
        onAddLanguage={props.onAddLanguage}
        onChange={props.onChangeLanguage}
        onDeleteEntry={props.onDeleteLanguage}
      />
      <Interests
        step={6}
        data={props.interests}
        onAddInterest={props.onAddInterest}
        onChange={props.onChangeInterest}
        onDeleteEntry={props.onDeleteInterest}
      />
    </>
  );
}
