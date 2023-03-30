import * as models from "./models";
import defaultProfilePicture from "./images/wick.png";

export const fakeData = {
  profilePicture: defaultProfilePicture,
  personal: {
    firstName: "Dark",
    lastName: "Woolper",
    profession: "Web Developer",
    address: "CDMX, México",
    linkedIn: "darkwool",
    portfolio: "https://github.com/DarkWool/",
    email: "chatGptTakesJobs@gmail.com",
    phoneNumber: "+52 1 1234 5678",
    aboutMe: `I'm a passionate and driven web developer with experience in front-end development, back-end development, and database design. I'm always looking for new challenges and opportunities to grow my skills and expand my knowledge of the latest web technologies. In my free time, you can find me tinkering with new web projects, playing guitar, or exploring the beautiful San Francisco Bay Area.`,
  },
  education: [
    {
      ...models.createEducationEntry(),
      school: "The Odin Project",
      degree: "Full Stack Developer Certification",
      from: "06/2022",
      to: "01/2024",
    },
    {
      ...models.createEducationEntry(),
      school: "Harvard",
      degree: "CS50: Introduction to Computer Science",
      from: "10/2020",
      to: "04/2021",
    },
    {
      ...models.createEducationEntry(),
      school: "FreeCodeCamp",
      degree: "JavaScript Algorithms and Data Structures",
      from: "08/2021",
      to: "01/2022",
    },
    {
      ...models.createEducationEntry(),
      school: "FreeCodeCamp",
      degree: "Responsive Web Design",
      from: "05/2021",
      to: "07/2021",
    },
  ],
  work: [
    {
      ...models.createExperienceEntry(),
      position: "Front End Developer",
      company: "XYZ Web Solutions",
      location: "CDMX",
      from: "03/2018",
      to: "Present",
      details:
        "-Designed and developed responsive web pages using HTML, CSS, and JavaScript.\r\n-Collaborated with UX/UI designers to ensure a consistent and user-friendly design across the website.\r\n-Participated in team meetings and provided input on project planning and development strategies.",
    },
  ],
  skills: [
    { ...models.createSkill(), name: "HTML, CSS, and JavaScript" },
    { ...models.createSkill(), name: "React and Redux" },
    { ...models.createSkill(), name: "Node.js" },
    { ...models.createSkill(), name: "PostgreSQL" },
    { ...models.createSkill(), name: "MySQL" },
    { ...models.createSkill(), name: "Git and Github" },
    { ...models.createSkill(), name: "Photoshop" },
    { ...models.createSkill(), name: "Illustrator" },
    { ...models.createSkill(), name: "Content creation" },
  ],
  languages: [
    { ...models.createLanguage(), name: "Spanish", proficiency: "native" },
    { ...models.createLanguage(), name: "English", proficiency: "fullProfessional" },
  ],
  interests: [
    { ...models.createInterest(), iconId: "camera", name: "Photography" },
    { ...models.createInterest(), iconId: "shield", name: "Cybersecurity" },
    { ...models.createInterest(), iconId: "robot_face", name: "AI" },
    { ...models.createInterest(), iconId: "tent", name: "Camping" },
    { ...models.createInterest(), iconId: "soccer", name: "Playing team sports" },
    { ...models.createInterest(), iconId: "desert_island", name: "Traveling" },
    { ...models.createInterest(), iconId: "popcorn", name: "Horror movies" },
    { ...models.createInterest(), iconId: "athletic_shoe", name: "Running" },
  ],
};
