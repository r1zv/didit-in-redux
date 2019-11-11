import React, { Component } from "react";
import AllDidit from "./components/AllDidit";
import DiditForm from "./components/DiditForm";
import AboutModal from "./components/AboutModal";

var username = 'testing@test.com';
const password = 'testpasshaha';


class App extends Component {
  checkCred() {
    if(username === 'test@test.com' && password === 'testpasshaha') {
      console.log('we are logged in!')
    } else {
      console.log('wrong username!');
    }
  }
  state = {
    show: false
  };
  showModal = e => {
    this.setState({ show: !this.state.show });
  };
  componentWillMount() {
    this.checkCred();
  }
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
