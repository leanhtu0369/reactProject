import React, { Component } from 'react'

class User extends Component {
  state = {
    edittingUser: { ...this.props.user }
  }

  get display() {
    const { user } = this.props

    return (
      <tr>
        <td>
          <input type="checkbox" defaultChecked={ user.checked } />
        </td>
        <td>{ user.id }</td>
        <td>{ user.fullName }</td>
        <td>{ user.gender === 'male' ? 'Nam' : 'Nữ' }</td>
        <td>{ user.age }</td>
        <td>
          <button 
            className="btn btn-info" 
            onClick={ () => this.props.editRow(user.id, true ) }
            >
            Edit
          </button>
          <button 
            className="btn btn-danger" 
            onClick={ () => this.props.deleteRow(user.id) }
            >
            Delete
          </button>
        </td>
      </tr>
    )
  }

  changeName = event => {
    const value = event.target.value
    this.setState({
      edittingUser: {
        ...this.state.edittingUser,
        fullName: value
      }
    })
  }

  changeAge = event => {
    const value = event.target.value
    this.setState({
      edittingUser: {
        ...this.state.edittingUser,
        age: value
      }
    })
  }

  get edittingRow() {
    const user = this.state.edittingUser

    return (
      <tr>
        <td>
          <input type="checkbox" defaultChecked={ user.checked } />
        </td>
        <td>{ user.id }</td>
        <td>
          <input type="text" value={ user.fullName } onChange={ this.changeName } />
        </td>
        <td>
          <select className="form-control" defaultValue={ user.gender }>
            <option value= 'male'>Nam</option>
            <option value='female'>Nữ</option>
          </select>
        </td>
        <td>
        <input type="text" value={ user.age } onChange={ this.changeAge } />
        </td>
        <td>
          <button className="btn btn-success" onClick={ (event) => this.props.saveRow(user.id, event) }>Save</button>
          <button className="btn btn-info" onClick={ () => this.props.editRow(user.id, false ) }>Cancel</button>
        </td>
      </tr>
    )
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', {
      nextProps,
      oldProps: this.props
    })

    this.setState({
      edittingUser: {
        ...this.state.edittingUser,
        ...nextProps.user
      }
    })
  }

  // shouldComponentUpdate() {
  //   return false
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount start');
    console.log(this.props.user);
    console.log('componentWillUnmount end');
  }

  render() {
    const { user } = this.props

    return (
      <>
        { user.isEdit ? this.edittingRow : this.display }
      </>
    )
  }
}

export default User
