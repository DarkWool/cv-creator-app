export function Select({ label, id, value, onChange, elementClass, options }) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} name={id} value={value} onChange={onChange} className={elementClass}>
        {options.map((option, index) => (
          <option value={option.value} disabled={index === 0} key={index}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}
