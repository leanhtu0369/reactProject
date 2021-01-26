import React, { Component } from 'react'

import { MyTodoContext } from "./../../../context/MyTodoContext";

class TagItem extends Component {
  render() {
    const { item } = this.props

    return(
      <MyTodoContext.Consumer>
        {
          value => (
            <li
              onClick={() => value.setCurrentTag(item.id)}
              className={value.state.currentTag === item.id ? 'active' : ''}
            >
              {item.name}
            </li>
          )
        }
      </MyTodoContext.Consumer>
    )
  }
}

export default TagItem
