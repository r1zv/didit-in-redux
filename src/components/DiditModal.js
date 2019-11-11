import React, { Component } from "react";
import EditDidit from "./EditDidit";
class DiditModal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.setState({ modalVisible: false });
  };
  render() {
    if (!this.props.modalVisible) {
      return null;
    }
    return (
      <div>
        <EditDidit
          show={this.props.modalVisible}
          didit={this.props.didit}
          key={this.props.didit.id}
        />
        <button onClick={this.onClose}>close</button>
      </div>
    );
  }
}

export default DiditModal;
