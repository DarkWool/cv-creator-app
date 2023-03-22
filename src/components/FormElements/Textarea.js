export function Textarea({ label, id, value, onInputChange, inputClass, rows }) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onInputChange}
        className={inputClass}
        rows={rows}
      />
    </>
  );
}
