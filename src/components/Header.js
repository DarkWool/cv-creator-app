import React from "react";
import "../styles/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

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
              <li className="header_nav-item" onClick={() => this.props.onTogglePreview(false)}>
                Edit CV
              </li>
              <li className="header_nav-item" onClick={() => this.props.onTogglePreview(true)}>
                Preview my CV
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export { Header };
