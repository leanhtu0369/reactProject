import axios from "axios";
import { Component } from "react";

class Form extends Component {
  constructor() {
    super()

    this.state = {
      form: {
        name: '',
        email: '',
        password: '',
        avatar: '',
        phone: '',
        age: '1',
        gender: 'male',
        hobbies: [],
        note: ''
      },
      hobbies: [
        { id: 1, name: 'Football' },
        { id: 2, name: 'Reading' },
        { id: 3, name: 'Swimming' },
        { id: 4, name: 'Runung' }
      ]
    }
  }

  onChange = event => {
    const { value, name, type, files } = event.target
    let newValue = value

    if (type === 'checkbox') {
      const oldValue = this.state.form[name]
      const isExist = oldValue.includes(value)

      isExist ? newValue = oldValue.filter(item => item !== value) : newValue = [...oldValue, value]
    }

    if (type === 'file') {
      const [avatar] = files
      newValue = avatar
    }

    this.setState({
      form: {
        ...this.state.form,
        [name]: newValue
      }
    })
  }

  submit = event => {
    event.preventDefault()
    // console.log(this.state.form);
    const { form } = this.state

    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('password', form.password)
    formData.append('avatar', form.avatar)
    formData.append('phone', form.phone)
    formData.append('age', form.age)
    formData.append('gender', form.gender)
    formData.append('hobbies', form.hobbies)
    formData.append('note', form.note)


    axios.post('/axios/form', formData)
  }

  render() {
    const { form, hobbies } = this.state

    return (
      <>
        <h1>My form</h1>
        <form action="" onSubmit={this.submit}>
          <table>
            <thead>
              <tr>
                <td>Key</td>
                <td>Value</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input type="text" name="name" value={form.name} onChange={this.onChange}/>
                </td>
              </tr>

              <tr>
                <td>Email</td>
                <td>
                  <input type="email" name="email" value={form.email} onChange={this.onChange}/>
                </td>
              </tr>

              <tr>
                <td>Password</td>
                <td>
                  <input type="password" name="password" value={form.password} onChange={this.onChange}/>
                </td>
              </tr>

              <tr>
                <td>Avatar</td>
                <td>
                  <input type="file" name="avatar" onChange={this.onChange}/>
                </td>
              </tr>

              <tr>
                <td>Phone</td>
                <td>
                  <input type="number" name="phone" value={form.phone} onChange={this.onChange}/>
                </td>
              </tr>

              <tr>
                <td>Age</td>
                <td>
                  <select name="age" value={form.age} onChange={this.onChange}>
                    <option value="1">1 tuổi</option>
                    <option value="2">2 tuổi</option>
                    <option value="3">3 tuổi</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>Gender</td>
                <td>
                  <label>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="male" 
                      checked={form.gender === 'male'} 
                      onChange={this.onChange}
                    />
                    Male
                  </label>

                  <label>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="female" 
                      checked={form.gender === 'female'} 
                      onChange={this.onChange}
                    />
                    Female
                  </label>
                </td>
              </tr>

              <tr>
                <td>Hobbies</td>
                <td>
                  {
                    hobbies.map(hobby => {
                      return (
                        <label key={hobby.id}>
                          <input 
                            type="checkbox"
                            name="hobbies"
                            value={hobby.id}
                            defaultChecked={form.hobbies.includes(hobby.id)}
                            onChange={this.onChange}
                          />
                          {hobby.name}
                        </label>
                      )
                    })
                  }
                </td>
              </tr>

              <tr>
                <td>Note</td>
                <td>
                  <textarea name="note" id="" cols="30" rows="10" value={form.note} onChange={this.onChange}></textarea>
                </td>
              </tr>

              <tr>
                <td>Note</td>
                <td>
                  <button onClick={this.submit}>Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </>
    )
  }
}

export default Form;
