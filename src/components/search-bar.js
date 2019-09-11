import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchText: "",
    placeholder: "Tapez le titre d'un film... !"
  };

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }

  handleOnClick(e) {
    this.props.callback(this.state.searchText);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 input-group">
          <input
            type="text"
            className="form-control input-lg"
            onChange={this.handleChange.bind(this)}
            placeholder={this.state.placeholder}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-secondary"
              onClick={this.handleOnClick.bind(this)}
            >
              Rechercher
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
