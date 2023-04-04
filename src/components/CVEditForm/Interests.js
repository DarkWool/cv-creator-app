import { useState } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";
import { Button } from "../Button.js";
import { EmojiPicker } from "./EmojiPicker";

const PLACEHOLDERS = [
  { iconId: "airplane", name: "Traveling" },
  { iconId: "closed_book", name: "Reading" },
  { iconId: "basketball", name: "Basketball" },
  { iconId: "notes", name: "Music" },
  { iconId: "art", name: "Art" },
  { iconId: "lower_left_ballpoint_pen", name: "Writing" },
  { iconId: "helmet_with_white_cross", name: "Volunteer work" },
  { iconId: "camera", name: "Photography" },
  { iconId: "hiking_boot", name: "Hiking" },
  { iconId: "bulb", name: "Technology" },
];

export function Interests({ step, data, onAddInterest, onChange, onDeleteEntry }) {
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState(null);
  const entries = data.length;

  const hideEmojiTooltip = () => setIsTooltipActive(false);

  function handleEmojiSelect(e) {
    onChange(selectedInterest, "iconId", e.id);
    hideEmojiTooltip();
  }

  function handleClickOutsidePicker(e) {
    const iconPickerBtn = e.target.closest(".btn-icon-picker");
    if (iconPickerBtn) return;

    hideEmojiTooltip();
  }

  return (
    <section className="edit-block">
      <FormHeader
        step={step}
        title={"Interests"}
        desc={
          <>
            <p>
              Your interests can give employers a better sense of who you are as a person and what
              motivates you.
            </p>
            <p>
              Be sure to choose interests that are relevant to the job you're applying for, and that
              showcase your personality, skills, and values. e.g if you're applying for a job in
              marketing, include interests such as writing or photography.
            </p>
          </>
        }
        button={
          <Button
            variant="add"
            onClick={onAddInterest}
            title="Add new interest"
            content="Add Interest"
          />
        }
      />

      <FormContainer>
        {data.map((interest, index) => {
          let iconId;
          if (interest.iconId === null) {
            iconId = PLACEHOLDERS[index] ? PLACEHOLDERS[index].iconId : "8ball";
          } else {
            iconId = interest.iconId;
          }

          return (
            <InputWrapper variant="row" key={interest.id}>
              <Button
                onClick={() => {
                  setIsTooltipActive(true);
                  setSelectedInterest(interest.id);
                }}
                title={interest.name ? `Change ${interest.name} icon` : "Change interest icon"}
                content={<em-emoji id={iconId} size="2em"></em-emoji>}
                extraClasses="btn-icon-picker"
              />

              <Input
                id={`cvInterest${index}`}
                type="text"
                placeholder={
                  PLACEHOLDERS[index] ? `e.g. ${PLACEHOLDERS[index].name}` : "New interest..."
                }
                value={interest.name}
                onChange={(e) => onChange(interest.id, "name", e.target.value)}
              />

              {entries > 1 && (
                <Button
                  variant="delete"
                  onClick={() => onDeleteEntry(interest.id)}
                  title="Delete interest"
                />
              )}

              {isTooltipActive && interest.id === selectedInterest && (
                <EmojiPicker
                  shouldRender={isTooltipActive}
                  onEmojiSelect={handleEmojiSelect}
                  onClickOutside={handleClickOutsidePicker}
                ></EmojiPicker>
              )}
            </InputWrapper>
          );
        })}
      </FormContainer>
    </section>
  );
}
