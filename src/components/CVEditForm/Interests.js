import { useRef, useEffect, useState } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";
import { InputWrapper } from "../FormElements/InputWrapper";
import Picker from "@emoji-mart/react";

const tooltipPosition = { top: null };
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
  const tooltipRef = useRef(null);
  const entries = data.length;

  const hideEmojiTooltip = () => setIsTooltipActive(false);

  useEffect(() => {
    const tooltip = tooltipRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio < 1) tooltip.style.bottom = "10px";
      else tooltip.style.top = tooltipPosition.top;

      tooltip.style.position = "absolute";
    });

    if (tooltip) {
      observer.observe(tooltip);
    }

    return () => {
      if (tooltip) {
        observer.unobserve(tooltip);
        tooltip.style = {};
      }
    };
  });

  return (
    <section className="edit-block">
      <FormHeader
        step={step}
        title={"Interests"}
        buttonText={"Add Interest"}
        clickHandler={onAddInterest}
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
              <button
                type="button"
                className="btn-icon-picker"
                onClick={(e) => {
                  setIsTooltipActive(true);
                  setSelectedInterest(interest.id);

                  tooltipPosition.top = `${e.pageY}px`;
                }}
              >
                <em-emoji id={iconId} size="2em"></em-emoji>
              </button>

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
                <button type="button" onClick={() => onDeleteEntry(interest.id)}>
                  Delete
                </button>
              )}
            </InputWrapper>
          );
        })}
      </FormContainer>

      {isTooltipActive && (
        <div id="emojiTooltip" ref={tooltipRef}>
          <Picker
            previewPosition="none"
            skinTonePosition="none"
            onEmojiSelect={(e) => {
              onChange(selectedInterest, "iconId", e.id);
              hideEmojiTooltip();
            }}
            onClickOutside={(e) => {
              const iconPickerBtn = e.target.closest(".btn-icon-picker");
              if (iconPickerBtn) return;

              hideEmojiTooltip();
            }}
            maxFrequentRows={1}
          />
        </div>
      )}
    </section>
  );
}