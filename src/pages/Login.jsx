import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router";

import { setUser } from "../redux/state/user";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')

  const user = useSelector(store => store.user.currentUser)

  const handleOnchangePass = (event) => {
    setUserPass(event.target.value)
  }

  const handleOnchangeUseName = (event) => {
    setUserName(event.target.value)
  }

  const submit = () => {
    const id = userName

    if (!id) {
      return
    }

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        // console.log('response', response.data)
        const user = response.data

        dispatch(
          setUser(user)
        )

        history.push("/")
      })
      .catch(err => {
        alert('error')
      })
  }

  return(
    <>  
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <label htmlFor="">User Name</label>
            <input type="text" name="" id="" value={userName} onChange={handleOnchangeUseName}/>
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" value={userPass} onChange={handleOnchangePass}/>
          </div>
        </div>

        <button type="button" className="btn btn-success" onClick={submit}>Login</button>

      </div>
    </>
  )
}

export default Login
