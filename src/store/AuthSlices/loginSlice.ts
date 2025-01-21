import { loginType } from "@/Types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let initialState: loginType = {
  user: {
    token:
      (typeof localStorage !== "undefined" &&
        JSON.parse(localStorage.getItem("user") || "{}").token) ||
      null,
    userData:
      (typeof localStorage !== "undefined" &&
        JSON.parse(localStorage.getItem("user") || "{}").data) ||
      null,
  },
  loading: false,
  error: "",
};
export let loginFunc = createAsyncThunk(
  "login/loginFunc",
  async (params: { email: string; password: string }) => {
    try {
      let { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/auth/login`,
        params
      );
      console.log(data);
      return data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
export let LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = { token: null, userData: null };
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginFunc.fulfilled, (state, action) => {
      state.user = {
        token: action.payload.token,
        userData: action.payload.data.result,
      };
      state.loading = false;
      toast.success("مرحبا بك مره اخري");
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: action.payload.token,
            data: action.payload.data.result,
          })
        );
      }
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    });
    builder.addCase(loginFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginFunc.rejected, (state, action) => {
      state.loading = false;
      console.log(action);
      state.error = action.error.message;
      toast.error(action.error.message);
    });
  },
});
export let { logout } = LoginSlice.actions;
export default LoginSlice.reducer;
