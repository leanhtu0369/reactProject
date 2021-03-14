import React from "react"
import { Provider } from "react-redux"
import Button from "./components/Button"
import CounterValue from "./components/CounterValue"
import store from "./redux/stores"

const App = () => {
  return(
    <Provider store={store}>
      <Button></Button>
      <CounterValue></CounterValue>
    </Provider>
  )
}

export default App
