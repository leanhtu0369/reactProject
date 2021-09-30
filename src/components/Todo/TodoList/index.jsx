
import React, { Component } from 'react'

import { MyTodoContext } from "./../../../context/MyTodoContext";

import TodoItem from "./TodoItem";

class TodoList extends Component {

  render() {
    return(
      <MyTodoContext.Consumer>
        {
          value => (
            value.state.filteredTasks.length ?
              value.state.filteredTasks.map((item, index) => {
                return <TodoItem
                  key={index}
                  item={item}
                  changeStatus={this.changeStatus}
                />
              })
              :
              <p>Todo list is emty</p>
          )
        }
      </MyTodoContext.Consumer>
    )
  }
}

export default TodoList
