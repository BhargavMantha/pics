import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/Unsplash';
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    try {
      const { data: { results = [] } = { result: [] } } = await unsplash({
        params: { query: term }
      });
      this.setState({ images: results });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
