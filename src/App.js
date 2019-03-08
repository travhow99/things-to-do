import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import tasks from './task-data';
import randomColor from 'randomcolor';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: 'Try something new!',
      imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/sunset-3488162_1920.jpg',
      tagLine: 'Something clever, coming shortly ;)',
    }

    this.random = this.random.bind(this);
    this.findNew = this.findNew.bind(this);
  }

  random() {
    let taskLength = Object.keys(tasks).length;
    let num = Math.floor(Math.random() * taskLength); // returns a random integer from 1 to lenght of tasks
    return num;
  }

  findNew() {

    let current = this.random();
    console.log(current);

    let task = tasks[current].task;
    let imgUrl = tasks[current].imgUrl;
    let tagLine = tasks[current].tagLine;
    if (!task) {
      task = 'Try something new!';
    }
    if (!imgUrl) {
      imgUrl = 'https://travishowell.net/wp-content/uploads/2019/03/sunset-3488162_1920.jpg';
    }
    if (!tagLine) {
      tagLine = 'Something clever, coming shortly ;)';
    };

    this.setState({
      task: task,
      imgUrl: imgUrl,
      tagLine: tagLine,
    });

  }

  componentDidMount() {
    this.findNew();
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Go ahead, try something new!</h1>
          <img style={{maxWidth: 720, display: 'block'}} src={this.state.imgUrl}/>
          <div className="text-block">
            <p>You should...</p>
            <h3 style={{color: randomColor({luminosity: 'light'})}}>{this.state.task}</h3>
            <p>{this.state.tagLine}</p>
            <button onClick={this.findNew}>Nah, that sucks!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
