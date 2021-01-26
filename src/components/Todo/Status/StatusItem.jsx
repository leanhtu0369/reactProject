
import React, { Component } from 'react'

import { MyTodoContext } from "../../../context/MyTodoContext";

class StatusItem extends Component {

  render() {
    const { item } = this.props

    return(
      <MyTodoContext.Consumer>
        {
          value => (
            <li
              onClick={() => value.setCurrentStatus(item.id)}
              className={value.state.currentStatus === item.id ? 'active' : ''}
            >
              {item.name}
            </li>
          )
        }
      </MyTodoContext.Consumer>
    )
  }
}

export default StatusItem
