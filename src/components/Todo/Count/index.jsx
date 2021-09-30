import React, { Component } from 'react'

class Count extends Component {
  render() {
    const { counterCompleted, counter } = this.props

    return(
      <>
        {counterCompleted}
        &nbsp;/&nbsp;
        {counter}
        &nbsp;
        Completed
      </>
    )
  }
}

export default Count
