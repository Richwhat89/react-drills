import React, { Component } from 'react';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myImage={'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjegsTKgP3eAhVNOKwKHWNrA-AQjRx6BAgBEAU&url=https%3A%2F%2Fwww.logolynx.com%2Ftopic%2Fspitfire%2Bskateboard&psig=AOvVaw1oF8lMRexhINbRzbzqIhSS&ust=1543697789331446'}/>
      </div>
    );
  }
}

export default App;
