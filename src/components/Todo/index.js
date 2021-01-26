import React, { Component } from 'react'

import { todoList } from "./../../mockData/todo"

import { MyTodoContext } from "./../../context/MyTodoContext"

import TodoList from "./TodoList"
import Status from "./Status"
import Tags from "./Tag"
import Count from "./Count"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'

class Todo extends Component {
  constructor() {
    super()

    this.state = {
      todoList,
      filteredTasks: todoList,
      currentTag: 0,
      currentStatus: 0, // ALL TODO REJECTED IS_PENDING IS_COMPLETE
    }
  }

  get counter() {
    return this.state.filteredTasks.length
  }

  get counterCompleted() {
    return this.state.filteredTasks.filter(item => item.status === 2).length
  }

  setFilteredTasks = ({ tagId, statusId }) => {
    const newData = this.state.todoList.filter(item =>
      (tagId === 0 ? true : item.tags === tagId) && (statusId === 0 ? true : item.status === statusId)
    )
    // console.log(tagId, statusId, newData);
    // console.log(this);

    this.setState({
      filteredTasks: newData,
      currentTag: tagId,
      currentStatus: statusId
    })
  }

  setCurrentTag(id) {
    // console.log(id);
    this.setFilteredTasks({
      tagId: id,
      statusId: this.state.currentStatus
    })
    // console.log(id, this.state.currentStatus)
  }

  setCurrentStatus(id) {
    this.setFilteredTasks({
      tagId: this.state.currentTag,
      statusId: id
    })
    // console.log(this.state.currentTag, id)
  }

  generateId = () => {
    let max = 0
    this.state.todoList.forEach(item => item.id > max ? max = item.id : max)
    return max + 1
  }

  addToDo = () => {
    const inputAdd = document.querySelector('.todo__body__add input')
    // console.log(inputAdd.value.length);
    // console.log(this.inputAdd);

    if (inputAdd.value.length === 0) {
      alert('What do you need to do?')
    } else if(this.state.currentTag === 0) {
      alert('Please choose a tag')
    } else {
      const item = {
        id: this.generateId(),
        name: inputAdd.value,
        tags: this.state.currentTag,
        status: 0
      }
      this.state.filteredTasks.push(item)

      this.setState({
        filteredTasks: [...this.state.filteredTasks]
      })
    }
  }

  deleteToDo = id => {
    const newToDoList = this.state.todoList.filter(item => item.id !== id)
    // console.log(newToDoList);

    this.setState({
      todoList: [...newToDoList]
    })
  }

  changeStatus = id => {
    const curentItem = this.state.filteredTasks.find(item => item.id === id)
    curentItem.status === 1 ? curentItem.status = 2 : curentItem.status = 1

    this.setState({
      filteredTasks: [...this.state.filteredTasks]
    })
  }

  render() {
    return (
      <div className="todo">
        <h1>react todo app</h1>

        <div className="todo__body">
          <div className="todo__body__add">
            <input name="" id="" className="" type="text" placeholder="What do you need to do?" />

            <button type="button" name="" id="" onClick={ this.addToDo }>
              <FontAwesomeIcon icon={faPlus}/>
            </button>
          </div>

          <div className="todo__body__main">
            <MyTodoContext.Provider
              value={{
                state: this.state,
                deleteToDo: this.deleteToDo,
                changeStatus: this.changeStatus,
                setFilteredTasks: this.setFilteredTasks,
                setCurrentTag: this.setCurrentTag,
                setCurrentStatus: this.setCurrentStatus
              }}
            >

              <div className="todo__body__main__top">
                <Tags/>
              </div>

              <div className="todo__body__main__list">
                <TodoList/>
              </div>

              <div className="todo__body__main__bottom">
                <Status/>

                <Count
                  counterCompleted={this.counterCompleted}
                  counter={this.counter}
                />
              </div>

            </MyTodoContext.Provider>
          </div>
        </div>
      </div>
    )
  }
}

export default Todo
