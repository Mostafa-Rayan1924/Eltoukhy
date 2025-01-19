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
export let SuppliersFunc = createAsyncThunk("Suppliers/getData", async () => {
  try {
    let { data } = await axios.get(`${api}/nova/api/partner/getall`);
    console.log(data);
    return data.data;
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
