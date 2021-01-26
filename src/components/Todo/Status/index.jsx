import React, { Component } from 'react'

import { status } from "./../../../mockData/todo";

import { MyTodoContext } from "./../../../context/MyTodoContext";

import StatusItem from "./StatusItem";

class Status extends Component {
  constructor() {
    super()

    this.state = {
      status
    }
  }

  render() {
    return(
      <MyTodoContext.Consumer>
        {
          value => (
            <ul>
              <li
                onClick={ () => value.setCurrentStatus(0) }
                className={value.state.currentStatus === 0 ? 'active' : ''}
              >
                All
              </li>

              {
                this.state.status.map((item, index) => {
                  return <StatusItem
                    key={index}
                    item={item}
                  />
                })
              }
            </ul>
          )
        }
      </MyTodoContext.Consumer>
    )
  }
}

export default Status
