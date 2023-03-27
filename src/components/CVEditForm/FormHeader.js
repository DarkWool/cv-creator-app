export function FormHeader({ step, title, desc, button }) {
  return (
    <div className="edit-block_header">
      <div className="edit-block_step-heading">
        <span className="edit-block_step">{step}</span>
        <h2 className="edit-block_title">{title}</h2>
      </div>
      <div className="edit-block_step-info">
        {desc}
        {button}
      </div>
    </div>
  );
}
