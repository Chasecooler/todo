import React, { Component } from 'react';
import TaskList from './TaskList'

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      currentToDo: "",
    }
  }

handleChange = (event) => {
  // console.log(event.target.value);

  // catching the event.target.value and placing that on thre currentToDo in state.

  this.setState({
    currentToDo: event.target.value,
  })
}

addItem = (event) => {
  event.preventDefault();
  // ... need to take the currentToDo on state and then add it into thre todos array to build out the todo list
if (this.state.currentToDo !=="") {
  this.setState({
    todo: [...this.state.todo, this.state.currentToDo],
    currentToDo: ""
  })
}
  // console.log("addItem Method fired");
}

deleteItem = (index, event) => {
  const result = this.state.todo.filter((todo, index) => index != event.target.id)

  this.setState({
    todo: result
  })
}

render() {
  return (
    <div>
      <form onSubmit={this.addItem}>
        <label htmlFor="taskname"> Task Name: </label>
        <input onChange={this.handleChange} name="taskname" type='text' placeholder="Add ToDo Here!" />
        <button type="submit">Add Task</button>
      </form>
      <TaskList todoArray={this.state.todo} deleteItem={this.deleteItem} />
    </div>
  )
}
}


export default TodoList


// render() {
//   return(
//     <div clasName="container">
//       <form onSubmit={this.addItem}>
//         <label htmlFor="taskName">Task Name:</label>
//         input onChange={this.handleChange} name="taskName" type="text" placeholder="Add ToDo Here!" />
//         <button type="submit">Add Task</button>

//       </form>
//     </div>
//   )
// }

// }



// export default TodoList


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
