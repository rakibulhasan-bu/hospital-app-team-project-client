import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
