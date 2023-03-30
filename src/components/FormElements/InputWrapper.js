export function InputWrapper({ children, variant, className }) {
  const variantClass = variant === "row" ? "row" : "";
  const extraClasses = className ? className : "";
  return <div className={`input-wrapper ${variantClass} ${extraClasses}`}>{children}</div>;
}
