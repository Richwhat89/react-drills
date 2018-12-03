import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
      input: ''
    };

    this.handleTask = this.handleTask.bind(this);
  }

  handleInputChange(value){
    this.setState({input:value});
  }
  handleTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    });
  }

  render() {
    let list = this.state.list.map((element, index)=>{
      return(
        <Todo key={index} task={element}/>
      )
    })
    return (
      <div className="App">
        <h1>To-Do:</h1>
        <div>
          <input value={this.state.input}
            placeholder='New Task'
            onChange={(e)=> this.handleInputChange(e.target.value)}/>
          <button onClick={this.handleTask}>Add!!!</button>
        </div>
        <br/>
        {list}
      </div>
    );
  }
}

export default App;
