import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";
import { Textarea } from "../FormElements/Textarea";

export function GeneralInfo({ step, data, onChange }) {
  return (
    <section className="edit-block">
      <FormHeader step={step} title={"General Information"} />
      <FormContainer>
        <div className="flex-2-rows">
          <InputWrapper>
            <Input
              label="Name"
              id="cvName"
              type="text"
              value={data.name}
              onChange={(e) => onChange("name", e.target.value)}
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
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Address"
            id="cvAddress"
            type="text"
            value={data.address}
            onChange={(e) => onChange("address", e.target.value)}
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
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Portfolio"
              id="cvPortfolio"
              type="text"
              value={data.portfolio}
              onChange={(e) => onChange("portfolio", e.target.value)}
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
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Phone number"
              id="cvPhoneNumber"
              type="tel"
              value={data.phoneNumber}
              onChange={(e) => onChange("phoneNumber", e.target.value)}
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
          />
        </InputWrapper>
      </FormContainer>
    </section>
  );
}
