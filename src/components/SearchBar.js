import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFromSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment" onSubmit={this.onFromSubmit}>
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
