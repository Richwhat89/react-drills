import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      filterBands:'',
      bands: ['Bring Me the Horizon', 'Pierce the Veil', 'Sleeping With Sirens', 'Ice Nine Kills', 'Falling in Reverse']
    }
  }

  handleChange(filter){
    this.setState({filterBands: filter})
  }
  render() {
    let bandsDisplay=this.state.bands.filter((element, index)=>{
      return element.includes(this.state.filterBands);
    }).map((element, index)=>{return <h2 key={index}>{element}</h2>})

    return (
      <div className="App">
        <input onChange={(e)=>this.handleChange(e.target.value)} type='text'/>
        {bandsDisplay}
      </div>
    );
  }
}

export default App;
