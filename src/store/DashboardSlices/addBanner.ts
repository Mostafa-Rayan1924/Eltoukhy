import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export let addBannerFunc = createAsyncThunk(
  "addBanner/addBanner",
  async (params: {}, { getState }) => {
    let userState: any = getState();
    let token = userState.login.user.token;
    console.log(token);
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      let res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/poster/create`,
        params,
        {
          headers: headers,
        }
      );
      console.log(res);
      return res?.data?.data?.documents;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  }
);
export let addBannerSlice = createSlice({
  name: "addBanner",
  initialState: {
    islodaing: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBannerFunc.fulfilled, (state, action) => {
      state.islodaing = false;
      toast.success("added successfully");
    });
    builder.addCase(addBannerFunc.rejected, (state, action) => {
      state.islodaing = false;
      toast.error(action.error.message);
    });
    builder.addCase(addBannerFunc.pending, (state, action) => {
      state.islodaing = true;
    });
  },
});
export default addBannerSlice.reducer;
