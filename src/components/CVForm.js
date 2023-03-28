import "../styles/CVForm.css";
import { General } from "./CVEditForm/General";
import { Skills } from "./CVEditForm/Skills";
import { Languages } from "./CVEditForm/Languages";
import { Education } from "./CVEditForm/Education";
import { WorkExperience } from "./CVEditForm/WorkExperience";
import { Interests } from "./CVEditForm/Interests";
import { ProfilePicture } from "./CVEditForm/ProfilePicture";

export function CVForm(props) {
  return (
    <>
      <ProfilePicture image={props.profilePicture} onChange={props.onProfilePictureChange} />
      <General step={1} data={props.personalData} onChange={props.onPersonalChanges} />
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
        onDeleteEntry={props.onDeleteSkill}
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
