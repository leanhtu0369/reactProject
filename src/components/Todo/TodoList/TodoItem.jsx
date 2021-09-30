
import React, { Component } from 'react'

import { MyTodoContext } from "./../../../context/MyTodoContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

class TodoItem extends Component {

  render() {
    const { item } = this.props
    const completed = item.status

    return(
      <MyTodoContext.Consumer>
        {
          value => (
            <div className= { completed === 2 ? 'item completed' : 'item' }>
              <span className="status"
                onClick={ () => value.changeStatus(item.id) }
              >
                { completed === 2 ? <FontAwesomeIcon icon={faCheck}/> : '' }
              </span>

              <p className="name">{ item.name }</p>

              <span className="close"
                onClick={ () => value.deleteTodo(item.id) }
              >
                <FontAwesomeIcon icon={faTimes}/>
              </span>
            </div>
          )
        }
      </MyTodoContext.Consumer>
    )
  }
}

export default TodoItem
