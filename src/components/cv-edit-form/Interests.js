import { Component, createRef } from "react";
import { FormHeader } from "./FormHeader";
import { FormContainer } from "./FormContainer";
import Picker from "@emoji-mart/react";

const tooltipPosition = {
  top: null,
  left: null,
};

export class Interests extends Component {
  constructor(props) {
    super(props);

    this.observer = null;
    this.tooltipRef = createRef();
  }

  state = {
    isTooltipActive: false,
    selectedInterestId: null,
  };

  hideEmojiTooltip() {
    this.setState({
      ...this.state,
      isTooltipActive: false,
    });
  }

  componentDidUpdate() {
    const tooltip = this.tooltipRef.current;

    if (this.observer && tooltip) {
      this.observer.unobserve(this.tooltipRef.current);
      tooltip.style = {};
    }

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio < 1) tooltip.style.bottom = "10px";
      else tooltip.style.top = tooltipPosition.top;

      tooltip.style.position = "absolute";
    });

    if (tooltip) {
      this.observer.observe(tooltip);
    }
  }

  render() {
    const { userInterests, handleChanges, onNewInterest } = this.props;

    return (
      <section className="edit-block">
        <FormHeader
          step={this.props.step}
          title={"Interests"}
          buttonText={"Add Interest"}
          clickHandler={onNewInterest}
        />

        <FormContainer>
          {userInterests.map((interest) => {
            return (
              <div className="input-wrapper row">
                <button
                  type="button"
                  className="btn-icon-picker"
                  onClick={(e) => {
                    this.setState({
                      ...this.state,
                      isTooltipActive: true,
                      selectedInterestId: interest.id,
                    });

                    tooltipPosition.top = `${e.pageY}px`;
                    tooltipPosition.left = `${e.pageX}px`;
                  }}
                >
                  <em-emoji id={interest.iconId} size="2em"></em-emoji>
                </button>
                <input
                  type="text"
                  placeholder="New interest..."
                  value={interest.value}
                  onChange={(e) => {
                    handleChanges(interest.id, "value", e.target.value);
                  }}
                />

                {userInterests.length > 1 && (
                  <button type="button" onClick={() => handleChanges(interest.id)}>
                    Delete
                  </button>
                )}
              </div>
            );
          })}
        </FormContainer>

        {this.state.isTooltipActive && (
          <div id="emojiTooltip" ref={this.tooltipRef}>
            <Picker
              previewPosition="none"
              skinTonePosition="none"
              onEmojiSelect={(e) => {
                handleChanges(this.state.selectedInterestId, "iconId", e.id);
                this.hideEmojiTooltip();
              }}
              onClickOutside={(e) => {
                const iconPickerBtn = e.target.closest(".btn-icon-picker");
                if (iconPickerBtn) return;

                this.hideEmojiTooltip();
              }}
              maxFrequentRows={1}
            />
          </div>
        )}
      </section>
    );
  }
}
