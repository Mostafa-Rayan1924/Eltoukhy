import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export let addSupplierFunc = createAsyncThunk(
  "addSupplier/addSupplier",
  async (params: {}, { getState }) => {
    let userState: any = getState();
    let token = userState.login.user.token;
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      let res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/supplier/create`,
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
export let addSupplierSlice = createSlice({
  name: "addSupplier",
  initialState: {
    islodaing: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addSupplierFunc.fulfilled, (state, action) => {
      state.islodaing = false;
      toast.success("added successfully");
    });
    builder.addCase(addSupplierFunc.rejected, (state, action) => {
      state.islodaing = false;
      toast.error(action.error.message);
    });
    builder.addCase(addSupplierFunc.pending, (state, action) => {
      state.islodaing = true;
    });
  },
});
export default addSupplierSlice.reducer;
