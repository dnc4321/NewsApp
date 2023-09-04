import React, { Component } from "react";

export class PrevNextButtons extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
          &lt; Previous
        </button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>
          Next &gt;
        </button>
      </div>
    );
  }
}

export default PrevNextButtons;
