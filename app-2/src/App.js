import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      lyrics: ['Just', 'hold', 'your', 'breath', 'and', 'swim', 'under', 'the', 'ice']
    }
  }

  render() {
    let lyricsDisplay = this.state.lyrics.map((element, index)=>{
      return(
        <h2 key={index}>{element}</h2>
      )
    })

    return (
      <div className="App">
        {lyricsDisplay}
      </div>
    );
  }
}

export default App;
