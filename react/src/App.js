import React, { Component } from 'react';
import './App.css';
import { GroupView } from './GroupView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialQuantity: 1000
    };
  }

  render() {
    return (
      <div className='App'>
        Tiles Instantiated: {this.state.initialQuantity}
        <GroupView initialQuantity={this.state.initialQuantity}/>
      </div>
    );
  }
}

export default App;
