import { api } from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
type InitialState = {
  data: {}[];
  isLoading: boolean;
  error: string | undefined;
};
let initialState: InitialState = {
  data: [],
  isLoading: false,
  error: "",
};
export let bannersFunc = createAsyncThunk("banners/getData", async () => {
  try {
    let { data } = await axios.get(`${api}/nova/api/poster/getall`);
    return data.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
});
export let bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bannersFunc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(bannersFunc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(bannersFunc.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default bannerSlice.reducer;
