import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogIn: (state, payload) => {
      console.log(state, payload);
    },
    userLogOut: (state, payload) => {
      console.log(state, payload);
    },
  },
});

export const { userLogIn, userLogOut } = userSlice.actions;
export default userSlice.reducer;
