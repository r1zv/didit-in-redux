import React, { Component } from "react";
import { connect } from "react-redux";

import Didit from "./Didit";
import EditDidit from "./EditDidit";
class AllDidit extends Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <h1>Didits in Redux</h1>
        {this.props.didits.map(didit => (
          <div key={didit.id}>
            {didit.editing ? (
              <EditDidit didit={didit} key={didit.id} />
            ) : (
              <Didit didit={didit} key={didit.id} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    didits: state
  };
};

export default connect(mapStateToProps)(AllDidit);
