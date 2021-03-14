import { DECREMENT, INCREMENT } from "../actionTypes"

export const increment = num => {
  // console.log(payload)
  return {
    type: INCREMENT,
    num
  }
}

export const decrement = payload => {
  return {
    type: DECREMENT,
    payload
  }
}

