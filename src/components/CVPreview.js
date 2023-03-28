import "../styles/CVPreview.css";

function determineLanguageLevel(level) {
  switch (level) {
    case "elementary":
      return "elementary";
    case "limited":
      return "limited";
    case "professional":
      return "Professional";
    case "fullProfessional":
      return "Full Professional";
    case "native":
      return "Native / Bilingual";
    default:
      return "";
  }
}

export function CVPreview({
  profilePicture,
  personalData,
  educationData,
  workData,
  skills,
  languages,
  interests,
}) {
  return (
    <section className="cv">
      <div className="cv_sidebar">
        <div className="profile-picture-container">
          {profilePicture ? (
            <img src={profilePicture} alt="user" className="profile-picture" />
          ) : (
            <div className="profile-picture-placeholder"></div>
          )}
        </div>

        <div className="cv_sidebar-section">
          <h2 className="cv_sidebar-title">SKILLS</h2>
          <hr />
          <ul className="cv_list">
            {skills.map((skill) => {
              return skill.name && <li key={skill.id}>{skill.name}</li>;
            })}
          </ul>
        </div>

        <div className="cv_sidebar-section">
          <h2 className="cv_sidebar-title">LANGUAGES</h2>
          <hr />
          <ul className="cv_lang-list">
            {languages.map((lang) => {
              const languageLevel = determineLanguageLevel(lang.proficiency);

              return (
                lang.name && (
                  <li key={lang.id}>
                    {lang.name}
                    {languageLevel && (
                      <span className="accent-color-dark fw-600">- {languageLevel}</span>
                    )}
                  </li>
                )
              );
            })}
          </ul>
        </div>

        <div className="cv_sidebar-section">
          <h2 className="cv_sidebar-title">INTERESTS</h2>
          <hr />
          <ul className="cv_interest-list">
            {interests.map((interest) => {
              return (
                interest.name && (
                  <li key={interest.id}>
                    <em-emoji id={interest.iconId} size="2em"></em-emoji>
                    {interest.name}
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>

      <div className="cv_main">
        <div>
          <h2 className="cv_name">
            {personalData.firstName} {personalData.lastName}
          </h2>
          <p className="cv_profession accent-color">{personalData.profession}</p>

          <div className="cv_location margin-t-25" aria-label="Location" title="Location">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
            <p>{personalData.address}</p>
          </div>

          <p className="margin-t-25">{personalData.aboutMe}</p>

          <div className="cv_about-list">
            <ul>
              <li aria-label="Email address" title="Email address">
                <a href={`mailto:${personalData.email}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                  {personalData.email}
                </a>
              </li>
              <li aria-label="LinkedIn profile" title="LinkedIn profile">
                <a
                  href={`https://www.linkedin.com/in/${personalData.linkedIn}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                  </svg>
                  {personalData.linkedIn}
                </a>
              </li>
              <li aria-label="Phone number" title="Phone number">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
                {personalData.phoneNumber}
              </li>
              <li aria-label="Portfolio URL" title="Portfolio URL">
                <a href={personalData.portfolio} target="_blank" rel="noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
                  </svg>
                  {personalData.portfolio}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="cv_sidebar-title">Work Experience</h2>
          <hr />
          {workData.map((exp) => {
            return (
              <div className="cv_experience-block" key={exp.id}>
                <h3 className="cv_sidebar-title">
                  <span aria-label="Position">{exp.position}</span>
                  <br></br>
                  <span aria-label="Company" className="cv_main-subtitle fw-500">
                    {exp.company}
                  </span>
                </h3>
                <div className="cv_experience-details accent-color">
                  <p className="fw-500">
                    {exp.from} - {exp.to}
                  </p>
                  <p>{exp.location}</p>
                </div>
                <div>
                  <h4 className="fw-500">Achievements / Tasks:</h4>
                  <p className="margin-t-10">{exp.details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h2 className="cv_sidebar-title">Education</h2>
          <hr />
          {educationData.map((educ) => {
            return (
              <div className="cv_experience-block" key={educ.id}>
                <h3 className="cv_sidebar-title">
                  <span aria-label="Position">{educ.degree}</span>
                  <br></br>
                  <span aria-label="Company" className="cv_main-subtitle fw-400">
                    {educ.school}
                  </span>
                </h3>
                <div className="cv_experience-details accent-color">
                  <p className="accent-color fw-500">
                    {educ.from} - {educ.to}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
