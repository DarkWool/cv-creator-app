import uniqid from "uniqid";

const personalData = {
  firstName: "",
  lastName: "",
  profession: "",
  aboutMe: "",
  address: "",
  linkedIn: "",
  portfolio: "",
  email: "",
  phoneNumber: "",
};

function createSkill() {
  return {
    id: uniqid(),
    name: "",
  };
}

function createLanguage() {
  return {
    id: uniqid(),
    name: "",
    proficiency: "null",
  };
}

function createEducationEntry() {
  return {
    id: uniqid(),
    school: "",
    degree: "",
    from: "",
    to: "",
  };
}

function createExperienceEntry() {
  return {
    id: uniqid(),
    position: "",
    company: "",
    location: "",
    from: "",
    to: "",
    details: "",
  };
}

function createInterest() {
  return {
    id: uniqid(),
    iconId: null,
    name: "",
  };
}

export {
  personalData,
  createEducationEntry,
  createExperienceEntry,
  createSkill,
  createLanguage,
  createInterest,
};
