import { useEffect, useState } from "react"
import axios from "axios";

const Axios = () => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const fetchUsers = async () => {
    // const reponse = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(reponse)

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(reponse => {
        // console.log('then số 1')
        setUsers(reponse.data)
      })
      .then(() => {
        // console.log('then số 2')
      })
      // .catch(errors => console.log(error))

  }

  const fetchUser = async user => {
    // console.log(user);
    setCurrentUser(user)
  }

  useEffect(() => {
    // console.log('mount');
    fetchUsers()
  },[])

  useEffect(() => {
    // console.log('update');
    // console.log(currentUser);
  },[currentUser])

  return (
    <>
      <h1>User list</h1>
      <ul>
        {
          users.map(user => {
            return <li key={user.id} onClick={() => fetchUser(user)}>{user.name}</li>
          })
        }
      </ul>

      <h2>User info</h2>
      <p>{currentUser.phone}</p>
    </>
  )
}

export default Axios
