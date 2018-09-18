import React, { Component } from 'react';
import './App.css';
import './index.css';
// import NewToDoForm from './NewToDoForm';
// import  Data from './components/Data';
// import Input from './components/Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fresh: "lets begin it",
      name:"hey",
      newToDo: "",
      ToDos: []
    };
  }
  allDone() {
    const ToDos = this.state.ToDos.map(Todo => {
      return {
        ...Todo,//title=ToDo.title
        done: true
      }
    });

    this.setState({
      ToDos
    })
  };
  removeTodo(index) {
    const ToDos = [...this.state.ToDos];//copy the array elements into new array
    ToDos.splice(index, 1);
    this.setState({
      ToDos
    });

  }
  toggleTodoDone(event, index) {
    const ToDos = [...this.state.ToDos];//copy the array
    ToDos[index] = {
      ...ToDos[index],//copy the ToDo
      done: event.target.checked //update done property on copied ToDo
    };

    this.setState({
      ToDos
    });

  }
  newToDoChanged(event) {
    this.setState({
      newToDo: event.target.value
    });

  }
  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newToDo: "",
      ToDos: [...this.state.ToDos, {
        title: this.state.newToDo,
        done: false
      }]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.fresh}</h1>
        
        {/* <NewToDoForm
        newToDo={this.state.newToDo}
        formSubmitted={(event)=>this.state.formSubmitted(event)}
        newToDoChanged={(event)=>this.state.newToDoChanged(event)}
                  /> */}
        <button onClick={() => this.allDone()}>AllDone</button>
        <ul>
          {this.state.ToDos.map((ToDo, index) => {
            return <li key={ToDo.title}><input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" checked={ToDo.done} />
              {/* <span style={{textDecoration : ToDo.done ? 'line through':'inherit'}}>{ToDo.title}
             </span>  */}
              <span className={ToDo.done ? 'done' : ''}>{ToDo.title}</span>
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>
          })}

        </ul>
        {/* <Data/> */}
        {/* <Input /> */}
      </div>
    );
  }
}

export default App;
