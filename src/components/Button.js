export function Button({ variant, content, title, onClick, extraClasses }) {
  let icon,
    styleClasses = "";

  if (variant === "primary") {
    styleClasses = "btn-primary";
  } else if (variant === "add") {
    styleClasses = "btn-icon-add";
    icon = (
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
      >
        <path
          d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
          fillRule="nonzero"
        />
      </svg>
    );
  } else if (variant === "delete") {
    styleClasses = "btn-icon-delete";
    icon = (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
      </svg>
    );
  } else if (variant === "sec") {
    styleClasses = "btn-secondary";
  }

  if (extraClasses) styleClasses += ` ${extraClasses}`;

  return (
    <button type="button" className={styleClasses} onClick={onClick} title={title}>
      {icon}
      {content}
    </button>
  );
}
