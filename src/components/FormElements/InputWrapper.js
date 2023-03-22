export function InputWrapper({ children, variant }) {
  const variantClass = variant === "row" ? "row" : "";
  return <div className={`input-wrapper ${variantClass}`}>{children}</div>;
}
