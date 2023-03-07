import React, { Component } from "react";
import { Header } from "./components/header";

class App extends Component {
  state = {
    isPreviewActive: false,
  };

  togglePreview = (value) => {
    this.setState({
      isPreviewActive: value,
    });
  };

  render() {
    const currPage = this.state.isPreviewActive ? <div>Preview...</div> : <div>Edit tab</div>;

    return (
      <>
        <Header onTogglePreview={this.togglePreview} />
        <main className="content-margin">{currPage}</main>
      </>
    );
  }
}

export default App;
