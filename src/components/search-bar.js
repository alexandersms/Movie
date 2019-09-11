import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchText: "",
    placeholder: "Tapez le titre d'un film... !"
  };

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control input-lg"
            onChange={this.handleChange.bind(this)}
            placeholder={this.state.placeholder}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
