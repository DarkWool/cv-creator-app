import "../styles/Header.css";

export function Header({ onTogglePreview, onFillExampleCV }) {
  return (
    <header>
      <div className="content-margin header_inner">
        <div>
          <h1>CV Creator</h1>
          <p>Made by DarkWool</p>
        </div>
        <nav className="header_nav">
          <ul>
            <li className="header_nav-item" onClick={() => onTogglePreview(false)}>
              Edit CV
            </li>
            <li className="header_nav-item" onClick={() => onTogglePreview(true)}>
              Preview my CV
            </li>
            <li className="header_nav-item">
              <button
                type="button"
                onClick={(e) => {
                  const userAnswer = window.confirm(
                    "Are you sure you want to load the example CV?, this will erase all the data you have entered and can't be undone."
                  );
                  if (userAnswer) onFillExampleCV();
                }}
              >
                Fill Example CV
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
