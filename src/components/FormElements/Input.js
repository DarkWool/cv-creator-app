export function Input({ label, id, type, value, onChange, placeholder, inputClass }) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClass}
      />
    </>
  );
}
