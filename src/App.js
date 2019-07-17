import React, from 'react';


class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    }
  }

handleChange = event => {
  console.log(event.target.value);

}

addItem = event => {
  event.preventDefault();
  console.log("addItem Method fired");
}

render() {
  return(
    <div clasName="container">
      <form onSubmit={this.addItem}>
        <label htmlFor="taskName">Task Name:</label>
        input onChange={this.handleChange} name="taskName" type="text" placeholder="Add ToDo Here!" />
        <button type="submit">Add Task</button>

      </form>
    </div>
  )
}

}



export default TodoList


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
