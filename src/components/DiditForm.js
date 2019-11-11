import React, { Component } from "react";
import { connect } from "react-redux";

class DiditForm extends Component {
  handleSubmit = e => {
    //prevents page refresh
    e.preventDefault();
    const title = this.getTitle.value;
    const note = this.getNote.value;
    const data = {
      id: new Date(),
      title,
      note,
      editing: false,
      isChecked: false
    };
    this.props.dispatch({
      type: "ADD_DIDIT",
      data
    });
    this.getTitle.value = "";
    this.getNote.value = "";
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Create Didit</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Enter Didit Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            cols="28"
            ref={input => (this.getNote = input)}
            placeholder="Enter Didit Notes"
          />
          <br />
          <br />
          <button>Create</button>
        </form>
      </div>
    );
  }
}
export default connect()(DiditForm);
