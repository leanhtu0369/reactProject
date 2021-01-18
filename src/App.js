import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./scss/index.scss";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <>
        <Users />
      </>
    )
  }
}

export default App
