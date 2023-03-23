import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";
import { Textarea } from "../FormElements/Textarea";

export function General({ step, data, onChange }) {
  return (
    <section className="edit-block">
      <FormHeader step={step} title={"General Information"} />
      <FormContainer>
        <div className="flex-2-rows">
          <InputWrapper>
            <Input
              label="First name"
              id="cvFirstName"
              type="text"
              value={data.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Last Name"
              id="cvLastName"
              type="text"
              value={data.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
            />
          </InputWrapper>
        </div>

        <InputWrapper>
          <Input
            label="Profession"
            id="cvProfession"
            type="text"
            value={data.profession}
            onChange={(e) => onChange("profession", e.target.value)}
            placeholder="e.g.  Web Developer"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="City and Country"
            id="cvAddress"
            type="text"
            value={data.address}
            onChange={(e) => onChange("address", e.target.value)}
            placeholder="e.g.  Atlanta, USA"
          />
        </InputWrapper>

        <div className="flex-2-rows">
          <InputWrapper>
            <Input
              label="LinkedIn Profile"
              id="cvLinkedIn"
              type="text"
              value={data.linkedIn}
              onChange={(e) => onChange("linkedIn", e.target.value)}
              placeholder="e.g.  johnsmith1234"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Portfolio URL"
              id="cvPortfolio"
              type="url"
              value={data.portfolio}
              onChange={(e) => onChange("portfolio", e.target.value)}
              placeholder="e.g.  https://github.com/DarkWool/"
            />
          </InputWrapper>
        </div>

        <div className="flex-2-rows">
          <InputWrapper>
            <Input
              label="Email"
              id="cvEmail"
              type="email"
              value={data.email}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="e.g.  cv_maker@gmail.com"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Phone number"
              id="cvPhoneNumber"
              type="tel"
              value={data.phoneNumber}
              onChange={(e) => onChange("phoneNumber", e.target.value)}
              placeholder="e.g.  +52 1 55 1234 56789"
            />
          </InputWrapper>
        </div>

        <InputWrapper>
          <Textarea
            label="Description (About me)"
            id="cvAboutMe"
            value={data.aboutMe}
            onInputChange={(e) => onChange("aboutMe", e.target.value)}
            rows={8}
            resize="y"
            placeholder="Tell us about yourself! This is your chance to showcase your skills, experience, and personality. Write a brief summary of who you are and what you can bring to the table."
          />
        </InputWrapper>
      </FormContainer>
    </section>
  );
}
