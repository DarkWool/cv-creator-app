import "../styles/Header.css";

export function Header({ onTogglePreview }) {
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
