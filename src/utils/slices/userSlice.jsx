import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  userName: localStorage.getItem("userName"),
  userType: localStorage.getItem("userType")
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.userName = action.payload.userName;
      state.userType = action.payload.userType;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userName", action.payload.userName);
      localStorage.setItem("userType", action.payload.userType);
    },
    clearUser: (state) => {
      state.token = null;
      state.userName = null;
      localStorage.clear();
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
