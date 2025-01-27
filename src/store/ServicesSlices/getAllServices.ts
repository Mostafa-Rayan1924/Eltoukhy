import { BannerType, servicesMain } from "@/Types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
type InitialState = {
  data: servicesMain[];
  isLoading: boolean;
  error: string | undefined;
};
let initialState: InitialState = {
  data: [],
  isLoading: false,
  error: "",
};
export let ServicesGetFunc = createAsyncThunk(
  "ServicesGet/getData",
  async () => {
    try {
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/category/getall`
      );
      return res?.data?.data?.documents;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  }
);
export let ServicesGetSlice = createSlice({
  name: "ServicesGet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ServicesGetFunc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ServicesGetFunc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(ServicesGetFunc.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default ServicesGetSlice.reducer;
