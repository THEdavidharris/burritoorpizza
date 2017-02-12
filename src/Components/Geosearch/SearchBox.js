import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Start typing!"
          onSuggestSelect={this.onSuggestSelect}
        />
      </div>
    )
  }

  onSuggestSelect(suggest) {
    console.log(suggest);
  }
};

export default SearchBox