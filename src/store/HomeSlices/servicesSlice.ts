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
    let res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/subcategory/getall`
    );
    return res?.data?.data?.documents;
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
