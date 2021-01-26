import React, { Component } from 'react'

import { tags } from "./../../../mockData/todo";

import { MyTodoContext } from "./../../../context/MyTodoContext";

import TagItem from "./TagItem";

class Tags extends Component {
  constructor() {
    super()

    this.state = {
      tags
    }
  }

  render() {
    return(
      <MyTodoContext.Consumer>
        {
          value => (
            <ul>Tags
              <li
                onClick={ () => value.setCurrentTag(0) }
                className={value.state.currentTag === 0 ? 'active' : ''}
              >
                All
              </li>
              {
                this.state.tags.map((item, index) => {
                  return <TagItem
                    key={index}
                    item={item}
                  />
                })
              }
              <li>Reset</li>
            </ul>
          )
        }
      </MyTodoContext.Consumer>
    )
  }
}

export default Tags
