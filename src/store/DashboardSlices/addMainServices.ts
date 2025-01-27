import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export let addMainServFunc = createAsyncThunk(
  "addMainServ/addMainServ",
  async (params: {}, { getState }) => {
    let userState: any = getState();
    let token = userState.login.user.token;
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      let res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/category/create`,
        params,
        {
          headers: headers,
        }
      );
      return res?.data?.data?.documents;
    } catch (error: any) {
      console.log(error);

      throw new Error(error?.message);
    }
  }
);
export let addMainServSlice = createSlice({
  name: "addMainServ",
  initialState: {
    islodaing: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addMainServFunc.fulfilled, (state, action) => {
      state.islodaing = false;
      toast.success("added successfully");
    });
    builder.addCase(addMainServFunc.rejected, (state, action) => {
      state.islodaing = false;
      toast.error(action.error.message);
    });
    builder.addCase(addMainServFunc.pending, (state, action) => {
      state.islodaing = true;
    });
  },
});
export default addMainServSlice.reducer;
