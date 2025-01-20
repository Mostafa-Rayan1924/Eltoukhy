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
export let SuppliersFunc = createAsyncThunk("Suppliers/getData", async () => {
  try {
    let res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/supplier/getall`
    );
    return res?.data?.data?.documents;
  } catch (error: any) {
    throw new Error(error?.message);
  }
});
export let SuppliersSlice = createSlice({
  name: "Suppliers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SuppliersFunc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SuppliersFunc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(SuppliersFunc.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default SuppliersSlice.reducer;
