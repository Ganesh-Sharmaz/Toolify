import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpProcess } from "../../SignUp/SignUpProcess.jsx";

export const signUp = createAsyncThunk("auth/signUp", async (user) => {
    console.log("user: ", user, "type: ", typeof user);
    // console.log("password: ", password, "type: ", typeof(password));
    const userOne = await SignUpProcess(user.displayName, user.email, user.password);
    console.log("userOne: ", userOne);
    const sendInPayload = {
      uid: userOne.uid,
      email: userOne.email,
      displayName: userOne.displayName,
      photoURL: userOne.photoURL,
      emailVerified: userOne.emailVerified,
      phoneNumber: userOne.phoneNumber,
      creationTime: userOne.metadata.creationTime,
      lastSignInTime: userOne.metadata.lastSignInTime,
  };
    return sendInPayload
});

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.status = "loading";
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.sendInPayload = action.payload;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;
