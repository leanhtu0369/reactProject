import { useDispatch } from "react-redux"
import { increment, decrement } from "../redux/actions/counter"

const Button = () => {
  const dispatch = useDispatch()

  const incrementCount = (num) => {
    dispatch(increment(num))
  }

  const decrementCount = () => {
    dispatch(decrement())
  }

  return(
    <>
      <button onClick={() => incrementCount(1)}>Increment</button>
      <button onClick={() => incrementCount(2)}>Increment 2</button>
      <button onClick={() => incrementCount(10)}>Increment 10</button>

      <br />

      <button onClick={decrementCount}>Decrement</button>
    </>
  )
}

export default Button
