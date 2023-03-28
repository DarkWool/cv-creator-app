import { Button } from "./Button.js";
import "../styles/Header.css";

export function Header({ onTogglePreview, onFillExampleCV }) {
  return (
    <header>
      <div className="content-margin header_inner">
        <div>
          <h1>CV Creator</h1>
          <p>
            Made by{" "}
            <a href="https://github.com/DarkWool/cv-creator-app" target="_blank" rel="noreferrer">
              DarkWool.
            </a>
          </p>
        </div>
        <nav className="header_nav">
          <ul>
            <li className="header_nav-item">
              <Button
                content="Edit CV"
                onClick={() => onTogglePreview(false)}
                extraClasses="simple"
              />
            </li>
            <li className="header_nav-item">
              <Button
                content="Preview CV"
                onClick={() => onTogglePreview(true)}
                extraClasses="simple"
              />
            </li>
            <li className="header_nav-item">
              <Button
                variant="sec"
                content="Fill Example CV"
                onClick={() => {
                  const userAnswer = window.confirm(
                    "Are you sure you want to load the example CV?, this will erase all the data you have entered and can't be undone."
                  );
                  if (userAnswer) onFillExampleCV();
                }}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
