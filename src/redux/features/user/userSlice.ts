import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "rakibul hasan",
    email: "rakibul@gmail.com",
  },
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogIn: (state, action) => {
      console.log(state, action);
    },
    userLogOut: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { userLogIn, userLogOut } = userSlice.actions;
export default userSlice.reducer;
