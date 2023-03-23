export function FormHeader({ step, title, buttonText, clickHandler }) {
  return (
    <div className="edit-block_header">
      <div className="edit-block_step-info">
        <span className="edit-block_step">{step}</span>
        <h2 className="edit-block_title">{title}</h2>
      </div>
      <div>
        <p>
          Etiam ullamcorper consectetur nunc volutpat fermentum. Sed vel purus eu ligula maximus
          viverra. Ut mollis in augue in pharetra. Duis ornare ante libero. Integer suscipit pretium
          placerat. Aliquam neque enim, placerat ut iaculis a, molestie sed magna. Suspendisse
          aliquam feugiat libero, sit amet placerat dui porta a.
        </p>
        {buttonText && (
          <button type="button" onClick={clickHandler}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
