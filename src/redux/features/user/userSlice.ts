import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

interface createUserProps {
  name: string | null;
  email: string;
  password: string;
  role: string;
  image: string;
}

interface signInUserProps {
  email: string;
  password: string;
  role: string;
}

const initialState = {
  name: "",
  email: "",
  role: "",
  imageUrl: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ name, email, password, role, image }: createUserProps) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }

    console.log(role);
    return {
      name: data.user.displayName,
      email: data.user.email,
      role: role,
      image,
    };
  }
);

export const signInUser = createAsyncThunk(
  "userSlice/signInUser",
  async ({ email, password, role }: signInUserProps) => {
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
        role,
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
      (state.name = payload.name),
        (state.email = payload.email),
        (state.role = payload.role),
        (state.imageUrl = payload.imageUrl);
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
          (state.imageUrl = ""),
          (state.isLoading = true),
          (state.isError = false),
          (state.error = "");
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        (state.name = payload.name || ""),
          (state.email = payload.email || ""),
          (state.role = payload.role),
          (state.imageUrl = payload.image),
          (state.isLoading = false),
          (state.isError = false),
          (state.error = "");
      })
      .addCase(createUser.rejected, (state, actions) => {
        (state.name = ""),
          (state.email = ""),
          (state.role = ""),
          (state.imageUrl = ""),
          (state.isLoading = false),
          (state.isError = true),
          (state.error = actions.error.message || "");
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
        (state.name = payload.name || ""),
          (state.email = payload.email || ""),
          (state.role = payload.role || ""),
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
          (state.error = actions.error.message || "");
      });
  },
});

export const { userLogOut, setUser, toggleLoading } = userSlice.actions;
export default userSlice.reducer;
