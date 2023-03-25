export function FormHeader({ step, title, desc, buttonText, clickHandler }) {
  return (
    <div className="edit-block_header">
      <div className="edit-block_step-info">
        <span className="edit-block_step">{step}</span>
        <h2 className="edit-block_title">{title}</h2>
      </div>
      <div>
        {desc}
        {buttonText && (
          <button type="button" onClick={clickHandler}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
