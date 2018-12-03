import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js';
import NewTask from './NewTask.js';
import List from './List.js';

class App extends Component {
  constructor(){
    super();
    
    this.state={
      list: []
    };
    this.handleNewTask = this.handleNewTask.bind(this);
  }
  handleNewTask(task){
    this.setState({list: [...this.state.list, task]});
  }
  render() {
    return (
      <div className="App">
        <h1>Too-Doos!</h1>
        <NewTask add={this.handleNewTask}/>
        <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
