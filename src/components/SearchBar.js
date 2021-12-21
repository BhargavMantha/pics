import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = (event) => {
    event.preventDefault();
    const { term } = this.state;
    this.props.onSubmit(term);
  };
  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: '10px', marginBottom: '10px' }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={({ target: { value } }) =>
                this.setState({ term: value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
