import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export let addServicesFunc = createAsyncThunk(
  "addServices/addServices",
  async (params: {}, { getState }) => {
    let userState: any = getState();
    let token = userState.login.user.token;
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      let res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/subcategory/create`,
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
export let addServicesSlice = createSlice({
  name: "addServices",
  initialState: {
    islodaing: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addServicesFunc.fulfilled, (state, action) => {
      state.islodaing = false;
      toast.success("added successfully");
    });
    builder.addCase(addServicesFunc.rejected, (state, action) => {
      state.islodaing = false;
      toast.error(action.error.message);
    });
    builder.addCase(addServicesFunc.pending, (state, action) => {
      state.islodaing = true;
    });
  },
});
export default addServicesSlice.reducer;
