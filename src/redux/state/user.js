import { createSlice } from "@reduxjs/toolkit";

import { setUserToLocalStorage } from "../../utils/localStorage";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null
  },
  reducers: {
    setUser: (state, action) => {
      setUserToLocalStorage(action.payload)
      state.currentUser = action.payload
      // console.log(action)
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer
