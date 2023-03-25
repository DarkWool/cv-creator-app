import * as models from "./models";
import { useState } from "react";
import { Header } from "./components/Header";
import { CVForm } from "./components/CVForm";
import { CVPreview } from "./components/CVPreview";
import { init } from "emoji-mart";
import data from "@emoji-mart/data";

function App() {
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const [personalData, setPersonalData] = useState(models.personalData);
  const [educationData, setEducationData] = useState([models.createEducationEntry()]);
  const [workData, setWorkData] = useState([models.createExperienceEntry()]);
  const [languages, setLanguages] = useState([models.createLanguage(), models.createLanguage()]);
  const [interests, setInterests] = useState([models.createInterest(), models.createInterest()]);
  const [skills, setSkills] = useState([
    models.createSkill(),
    models.createSkill(),
    models.createSkill(),
  ]);

  const togglePreview = (value) => setIsPreviewActive(value);

  // Personal Data
  function handlePersonalDataChanges(field, value) {
    setPersonalData({
      ...personalData,
      [field]: value,
    });
  }

  // Skills
  function handleAddSkill() {
    setSkills([...skills, models.createSkill()]);
  }

  function handleSkillChanges(id, newValue) {
    const newSkills = skills.map((skill) => {
      if (id === skill.id) {
        return { ...skill, name: newValue };
      } else return skill;
    });
    setSkills(newSkills);
  }

  function handleDeleteSkill(id) {
    setSkills(skills.filter((skill) => id !== skill.id));
  }

  // Education
  function handleAddEducation() {
    setEducationData([...educationData, models.createEducationEntry()]);
  }

  function handleEducationChanges(id, field, newValue) {
    const updatedData = educationData.map((education) => {
      if (id === education.id) {
        return {
          ...education,
          [field]: newValue,
        };
      } else return education;
    });
    setEducationData(updatedData);
  }

  function handleDeleteEducation(id) {
    setEducationData(educationData.filter((education) => id !== education.id));
  }

  // Work Experience
  function handleAddExperience() {
    setWorkData([...workData, models.createExperienceEntry()]);
  }

  function handleExperienceChanges(id, field, newValue) {
    const updatedData = workData.map((exp) => {
      if (id === exp.id) {
        return {
          ...exp,
          [field]: newValue,
        };
      } else return exp;
    });
    setWorkData(updatedData);
  }

  function handleDeleteExperience(id) {
    setWorkData(workData.filter((exp) => id !== exp.id));
  }

  // Languages
  function handleAddLanguage() {
    setLanguages([...languages, models.createLanguage()]);
  }

  function handleLanguageChanges(id, field, newValue) {
    const updatedData = languages.map((lang) => {
      if (id === lang.id) {
        return {
          ...lang,
          [field]: newValue,
        };
      } else return lang;
    });
    setLanguages(updatedData);
  }

  function handleDeleteLanguage(id) {
    setLanguages(languages.filter((lang) => id !== lang.id));
  }

  // Interests
  function handleAddInterest() {
    setInterests([...interests, models.createInterest()]);
  }

  function handleInterestChanges(id, field, newValue) {
    const updatedData = interests.map((int) => {
      if (id === int.id) {
        return {
          ...int,
          [field]: newValue,
        };
      } else return int;
    });
    setInterests(updatedData);
  }

  function handleDeleteInterest(id) {
    setInterests(interests.filter((int) => id !== int.id));
  }

  return (
    <>
      <Header onTogglePreview={togglePreview} />
      <main className="content-margin">
        {isPreviewActive ? (
          <CVPreview personalInfo={personalData} />
        ) : (
          <CVForm
            personalData={personalData}
            onPersonalChanges={handlePersonalDataChanges}
            educationData={educationData}
            onAddEducation={handleAddEducation}
            onChangeEducation={handleEducationChanges}
            onDeleteEducation={handleDeleteEducation}
            workData={workData}
            onAddExperience={handleAddExperience}
            onChangeExperience={handleExperienceChanges}
            onDeleteExperience={handleDeleteExperience}
            skills={skills}
            onAddSkill={handleAddSkill}
            onChangeSkill={handleSkillChanges}
            onDeleteSkill={handleDeleteSkill}
            languages={languages}
            onAddLanguage={handleAddLanguage}
            onChangeLanguage={handleLanguageChanges}
            onDeleteLanguage={handleDeleteLanguage}
            interests={interests}
            onAddInterest={handleAddInterest}
            onChangeInterest={handleInterestChanges}
            onDeleteInterest={handleDeleteInterest}
          />
        )}
      </main>
    </>
  );
}

// Initialize emoji-mart
init({ data });

export default App;
