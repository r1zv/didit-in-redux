import React, { Component } from "react";
import AllDidit from "./components/AllDidit";
import DiditForm from "./components/DiditForm";
import AboutModal from "./components/AboutModal";
class App extends Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="App">
        <h1>Didit</h1>
        <button
          onClick={e => {
            this.showModal(e);
          }}
        >
          About
        </button>

        <AboutModal onClose={this.showModal} show={this.state.show} />
        <DiditForm />
        <AllDidit />
      </div>
    );
  }
}

export default App;
