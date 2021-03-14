import { useSelector } from "react-redux"

const CounterValue = () => {
  const count = useSelector(store => store.counterReducer.count)
  // console.log(count)

  return(
    <>
      <p>Counter: {count}</p>
    </>
  )
}

export default CounterValue
