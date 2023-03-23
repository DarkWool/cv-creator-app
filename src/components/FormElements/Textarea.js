export function Textarea({ label, id, value, onInputChange, inputClass, rows, placeholder }) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        className={inputClass}
        rows={rows}
      />
    </>
  );
}
