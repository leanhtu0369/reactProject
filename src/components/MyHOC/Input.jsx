import React from "react"
import { useState } from "react"

import Card from "./Card";

const Input = props => {
  const [errorMessage, setErrorMessage] = useState('')
  const [value, setValue] = useState('')

  const validate = value => {
    const { type, max } = props

    if (type === 'text' && value.length > max) {
      setErrorMessage('text')
    } else if (type === 'number' && value > max) {
      setErrorMessage('number')
    } else {
      setErrorMessage('')
    }
  }

  const onChange = event => {
    const { value } = event.target

    setValue(value)

    validate(value)
  }

  return (
    <>
      <div>
        <label>{props.label}</label>
        <input type={props.type} value={value} onChange={onChange}/>
        {
          errorMessage && <p style={{ color:'red' }}>{errorMessage}</p>
        }
      </div>
    </>
  )
}

// const InputCardHOC = MyComponent => class _InputCard extends React.Component {
//   render() {
//     return (
//       <Card>
//         <h2>MyComponent HOC class</h2>
//         <MyComponent {...this.props}/>
//       </Card>
//     )
//   }
// }

const InputCardHOC = MyComponent => props => {
    return (
      <Card>
        <h2>MyComponent HOC function</h2>
        <MyComponent {...props}/>
      </Card>
    )
}


// cách1
export default InputCardHOC(Input)

// cách2
// export default Input
// export const InputCard = InputCardHOC(Input)
