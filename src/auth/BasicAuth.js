import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const BasicAuth = ({Component, ...otherProps}) => {
  const user = useSelector(store => store.user.currentUser)
  // console.log(user)

  useEffect(() => {
    // console.log(user);
  }, [user])

  return (
    <>
      {
        user ? <Component { ...otherProps }/> : <Redirect to="/login" />
      }
    </>
  )
}

export default BasicAuth
