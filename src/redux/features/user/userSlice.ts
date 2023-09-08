import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const initialState = {
  name: "",
  email: "",
  role: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ name, email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    console.log(data);
    return {
      name: data.user.displayName,
      email: data.user.email,
    };
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      (state.name = payload.name), (state.email = payload.email);
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    userLogOut: (state) => {
      (state.name = ""), (state.email = "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        (state.name = ""),
          (state.email = ""),
          (state.role = ""),
          (state.isLoading = true),
          (state.isError = false),
          (state.error = "");
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        (state.name = payload.name),
          (state.email = payload.email),
          (state.role = ""),
          (state.isLoading = false),
          (state.isError = false),
          (state.error = "");
      })
      .addCase(createUser.rejected, (state, actions) => {
        (state.name = ""),
          (state.email = ""),
          (state.role = ""),
          (state.isLoading = false),
          (state.isError = true),
          (state.error = actions.error.message);
      });
  },
});

export const { userLogOut, setUser, toggleLoading } = userSlice.actions;
export default userSlice.reducer;
