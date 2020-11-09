import React from 'react'
import TodoList from './comps/TodoList';
import AddTodoForm from './comps/AddTodoForm';
const { default: Title } = require("./comps/Title");
class App extends React.Component {
  state={
    tasks:[],
    input:''

  }
  handleChange=(e)=>{
    this.setState({
      input:e.target.value
    })
  }
  
  add=(task)=>{
    this.setState({
      tasks:[...this.state.tasks, task],
      input:''
    })
  }
  remove=(id)=>{
    this.setState({
      tasks:this.state.tasks.filter(task=>task.id!==id)
    })
  }
  render(){
    return (
      <div className="App">
        <Title/>
        <AddTodoForm handleChange ={this.handleChange}
         add={this.add} input={this.state.input}/>
        <TodoList tasks={this.state.tasks}
              remove={this.remove}
              check ={this.check}
        />
            </div>
    );
  }
  
}

export default App;
