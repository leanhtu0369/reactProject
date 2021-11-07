import React, { Component } from 'react'
import { students } from "./../../constants/students"
import User from "./User"

class Users extends Component {
  state = {
    students
  }

  editRow = (id, isEdit) => {
    // const user = this.state.students.find(user => user.id === id)
    // if(!user) {
    //   return
    // }

    // user.isEdit = isEdit

    const index = this.state.students.findIndex(user => user.id === id)
    const user = {...this.state.students[index]}
    user.isEdit = isEdit

    const newStudents = this.state.students
    newStudents[index] = user

    this.setState({
      students: [...this.state.students]
    })
  }

  saveRow = (id, event) => {
    const user = this.state.students.find(user => user.id === id)
    if(!user) {
      return
    }
    
    const tr = event.target.closest('tr')
    const inputFullName = tr.querySelector('td:nth-child(3) input')
    const inputGender = tr.querySelector('td:nth-child(4) select')
    const inputAge = tr.querySelector('td:nth-child(5) input')

    user.fullName = inputFullName.value
    user.gender = inputGender.value
    user.age = inputAge.value
    user.isEdit = false
    // console.log([...this.state.students]);

    this.setState({
      students: [...this.state.students]
    })
  }

  deleteRow = id => {
    const newStudents = this.state.students.filter(user => user.id !== id)
    // console.log(newStudents);

    this.setState({
      students: [...newStudents]
    })
  }

  generateId = () => {
    let max = 0
    this.state.students.forEach(user => user.id > max ? max = user.id : max)
    // console.log(max + 1);
    return max + 1
  }

  addNewRecord = () => {
    const user = {
      id: this.generateId(),
      isEdit: false,
      checked: false,
      fullName: '',
      gender: 'male',
      age: 0
    }
    // console.log(this.generateId());
  
    this.state.students.push(user)

    this.setState({
      students: [...this.state.students]
    })
  }

  toogleTickAll = (event) => {
    const isChecked = event.target.checked
  
    this.state.students.forEach(user => user.checked = isChecked)

    this.setState({
      students: [...this.state.students]
    })
  }

  componentWillMount() {
    console.log(123456);
<<<<<<< HEAD
    console.log("xyz");
=======
    console.log("abc");
>>>>>>> b0756f2ab17aef7c7ad2322b8345b0b5158d013e
    // console.log('componentWillMount')

    // console.log('componentWillMount start')
    // const btn = document.getElementById('add-btn')
    // console.log(btn)
    // console.log('componentWillMount end')
  }

  componentDidMount() {
    // console.log('componentDidMount')

    // console.log('componentDidMount start')
    // const btn = document.getElementById('add-btn')
    // console.log(btn)
    // console.log('componentDidMount end')
  }

  render() {
    console.log('render start')
    const btn = document.getElementById('add-btn')
    console.log(btn)
    console.log('render end')

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-end mt-3">
            <button id="add-btn" className="btn btn-success" onClick={ this.addNewRecord }>add</button>
            <button className="btn btn-danger">delete</button>
          </div>
        </div>

        <div className="row mt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                <input type="checkbox" onClick={ this.toogleTickAll }/>
                </th>
                <th>ID</th>
                <th>Fullname</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th> 
              </tr>
            </thead>

            <tbody>
              {
                this.state.students.map((user, index) => {
                  return <User 
                    key={index} 
                    user={user}
                    editRow={this.editRow}
                    saveRow={this.saveRow}
                    deleteRow={this.deleteRow}
                  />
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Users
