import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";

export function ProfilePicture({ image, onChange }) {
  return (
    <section className="edit-block">
      <FormContainer extraClasses="edit-picture_form">
        <div className="profile-picture-container">
          {image ? (
            <img src={image} alt="user" className="profile-picture" />
          ) : (
            <div className="profile-picture-placeholder"></div>
          )}
        </div>
        <div className="edit-block_form-desc">
          <h2 className="edit-block_title">Profile Picture</h2>
          <p>
            Adding a photo to your CV can be a great way to personalize your application and make a
            positive first impression. When uploading your photo, make sure it is a clear and recent
            headshot that shows your face in a professional manner.
          </p>
          <p>
            When taking your photo, dress professionally and
            <b> consider the background and lighting.</b> A neutral background and good lighting can
            help to highlight your features and present you in the best possible light. Remember,
            your photo is an important part of your CV, so take the time to choose a high-quality
            image that represents you in a professional and approachable manner.
          </p>
          <p>
            When you're done, the next step is to{" "}
            <b>start filling your application with your personal information</b>, good luck!
          </p>
          <Input id="cvProfilePicture" type="file" onChange={onChange} />
        </div>
      </FormContainer>
    </section>
  );
}
