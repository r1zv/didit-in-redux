import React, { Component } from "react";
import { connect } from "react-redux";

class EditDidit extends Component {
  state = { show: this.props.show };
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.setState({ show: false });
  };
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newNote = this.getNote.value;
    const data = {
      newTitle,
      newNote
    };
    this.props.dispatch({
      type: "UPDATE_DIDIT",
      id: this.props.didit.id,
      data: data
    });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.didit.title}
            placeholder="Enter Didit Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getNote = input)}
            defaultValue={this.props.didit.note}
            cols="28"
            placeholder="Enter Note"
          />
          <br />
          <br />
          <button onClick={this.onClose}>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditDidit);
