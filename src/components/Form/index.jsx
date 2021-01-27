import { Component } from "react";

class Form extends Component {
  constructor() {
    super()

    this.state = {
      form: {
        name: '',
        email: '',
        password: '',
        // avatar: '',
        phone: '',
        age: '1',
        gender: 'male',
        hobbies: []
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
    const { value, name, type } = event.target

    if (type === 'checked') {
      
    }

    this.setState({
      [name]: value
    })
  }

  render() {
    const { form, hobbies } = this.state

    return (
      <>
        <h1>My form</h1>

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
                <input type="file" name="avatar" value={form.avatar} onChange={this.onChange}/>
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
              {/* <td>
                <select name="age" value={form.age} onChange={this.onChange}>
                  <option value="1">1 tuổi</option>
                  <option value="2">2 tuổi</option>
                  <option value="3">3 tuổi</option>
                </select>
              </td> */}
            </tr>

            <tr>
              <td>Gender</td>
              {/* <td>
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
              </td> */}
            </tr>

            <tr>
              <td>Gender</td>
              {/* <td>
                {
                  hobbies.map(hobby => {
                    return (
                      <label key={hobby.id}>
                        <input 
                          type="checkbox"
                          name="hobbies"
                          value={hobby.id}
                          checked={form.hobbies.includes(hobby.id)}
                        />
                        {hobby.name}
                      </label>
                    )
                  })
                }
              </td> */}
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

export default Form;
