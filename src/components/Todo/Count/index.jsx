import React, { Component } from 'react'

class Count extends Component {
  render() {

    return(
      <>
        {this.props.counterCompleted}
        &nbsp;/&nbsp;
        {this.props.counter}
        &nbsp;
        Completed
      </>
    )
  }
}

export default Count
