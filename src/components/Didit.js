import React, { Component } from "react";
import { connect } from "react-redux";
import DiditModal from "./DiditModal";
class Didit extends Component {
  state = {
    modalVisible: false
  };
  showModal = e => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  render() {
    return (
      <div>
        <h2
        // easier to reuse onclick from edit action for now
        //   onClick={e => {
        //     this.showModal(e);
            
        //   }}
          onClick={() =>
            this.props.dispatch({
              type: "EDIT_DIDIT",
              id: this.props.didit.id
            })
          }
        >
          {this.props.didit.title}
        </h2>
        <p>{this.props.didit.note}</p>
        {!this.state.modalVisible ? (
          <input
            type="checkbox"
            checked={this.props.didit.isChecked}
            onChange={() =>
              this.props.dispatch({
                type: "CHECK_DIDIT",
                id: this.props.didit.id
              })
            }
          ></input>
        ) : (
          <p></p>
        )}
        {!this.state.show ? (
          <button
            onClick={() =>
              this.props.dispatch({
                type: "EDIT_DIDIT",
                id: this.props.didit.id
              })
            }
          >
            Edit
          </button>
        ) : (
          <p></p>
        )}
        {!this.state.modalVisible ? (
          <button
            onClick={() =>
              this.props.dispatch({
                type: "DELETE_DIDIT",
                id: this.props.didit.id
              })
            }
          >
            Delete
          </button>
        ) : (
          <p></p>
        )}
        {this.state.modalVisible ? (
          <DiditModal
            onClose={this.showModal}
            didit={this.props.didit}
            modalVisible={this.state.modalVisible}
          />
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}

export default connect()(Didit);
