export function CVPreview({ personalInfo }) {
  return (
    <div>
      <p>
        <strong>Name:</strong>
      </p>
      <p>{personalInfo.firstName.trim()}</p>
      <p>
        <strong>Last Name:</strong>
      </p>
      <p>{personalInfo.lastName.trim()}</p>
      <p>
        <strong>Profession:</strong>
      </p>
      <p>{personalInfo.profession.trim()}</p>
      <p>
        <strong>Description (About me):</strong>
      </p>
      <p>{personalInfo.aboutMe.trim()}</p>
    </div>
  );
}
