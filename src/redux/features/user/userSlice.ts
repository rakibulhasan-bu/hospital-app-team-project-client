import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { useInsertUsersMutation } from "./userApi";

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
    const [insertUser, { isError, isLoading, isSuccess }] =
      useInsertUsersMutation();
    insertUser({ email, userName: name });
    console.log(data);
    console.log("isError :>> ", isError);
    console.log("isLoading :>> ", isLoading);
    console.log("isSuccess :>> ", isSuccess);
    return {
      name: data.user.displayName,
      email: data.user.email,
    };
  }
);

export const signInUser = createAsyncThunk(
  "userSlice/signInUser",
  async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);

      return {
        name: user.displayName,
        email: user.email,
      };
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
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

    builder
      .addCase(signInUser.pending, (state) => {
        (state.name = ""),
          (state.email = ""),
          (state.role = ""),
          (state.isLoading = true),
          (state.isError = false),
          (state.error = "");
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        (state.name = payload.name),
          (state.email = payload.email),
          (state.role = ""),
          (state.isLoading = false),
          (state.isError = false),
          (state.error = "");
      })
      .addCase(signInUser.rejected, (state, actions) => {
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
