import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./../redux/state/user";


export default configureStore({
  reducer: {
    user: userReducer
  }
})
