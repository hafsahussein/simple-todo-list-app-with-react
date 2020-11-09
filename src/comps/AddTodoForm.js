import React, { Component } from 'react'
import GenerateID from '../GenerateID';

export default class AddTodoForm extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.add({name:this.props.input, id:GenerateID()});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type = "text"
                    required
                    value={this.props.input}
                    onChange={this.props.handleChange}
                />
                <button type="submit">Add</button>
            </form>
        )
    }
}
