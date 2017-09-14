require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {csv} from 'd3-request';

class AppComponent extends React.Component {
  render() {
    return (
      <div id='search-box'>
        <form onSubmit={this.handleSubmit()} id='search-form' method='get' target='_top'>
          <input id='search-text' name='q' placeholder='search flow logs...' type='text'/>
          <button id='search-button' type='submit'>
            <span>Search</span>
          </button>
        </form>
      </div>
    );
  }

  handleSubmit() {
    var rawFile = require('../sources/file.txt');
    console.log('mmmmm' + rawFile);
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
