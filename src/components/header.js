import React from "react";
import "../styles/header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="content-margin header_content">
          <div>
            <h1>CV Creator</h1>
            <p>Made by DarkWool</p>
          </div>
          <nav className="header_nav">
            <ul>
              <li className="header_nav-item">Edit CV</li>
              <li className="header_nav-item">Preview my CV</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export { Header };
