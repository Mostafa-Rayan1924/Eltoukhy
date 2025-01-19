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
export let ServicesFunc = createAsyncThunk("Services/getData", async () => {
  try {
    let { data } = await axios.get(`${api}/nova/api/category/getall`);
    return data.data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
});
export let ServicesSlice = createSlice({
  name: "Services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ServicesFunc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ServicesFunc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(ServicesFunc.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default ServicesSlice.reducer;
