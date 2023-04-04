import { useRef, useEffect } from "react";
import Picker from "@emoji-mart/react";

export function EmojiPicker({ shouldRender, onEmojiSelect, onClickOutside }) {
  const tooltipRef = useRef(null);

  useEffect(() => {
    const tooltip = tooltipRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio < 1) tooltip.style.bottom = "10px";
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
  }, [shouldRender]);

  return (
    shouldRender && (
      <div id="emojiTooltip" ref={tooltipRef}>
        <Picker
          previewPosition="none"
          skinTonePosition="none"
          onEmojiSelect={onEmojiSelect}
          onClickOutside={onClickOutside}
          dynamicWidth="true"
        />
      </div>
    )
  );
}
