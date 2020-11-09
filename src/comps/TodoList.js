import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        const{tasks,remove}= this.props;
        return (
            <ul className="tasks">
                {tasks&&tasks.map(task=>(
                    <li key={task.id}>
                        {task.name}
                        <button className="delete"
                        onClick={(e)=>{
                            e.preventDefault();
                            remove(task.id)
                        }}
                        >X</button>
                        </li>
                ))}
            </ul>
        )
    }
}
