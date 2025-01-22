import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export let addProjectFunc = createAsyncThunk(
  "addProject/addProject",
  async (params: {}, { getState }) => {
    let userState: any = getState();
    let token = userState.login.user.token;
    let headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      let res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/project/create`,
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
export let addProjectSlice = createSlice({
  name: "addProject",
  initialState: {
    islodaing: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProjectFunc.fulfilled, (state, action) => {
      state.islodaing = false;
      toast.success("added successfully");
    });
    builder.addCase(addProjectFunc.rejected, (state, action) => {
      state.islodaing = false;
      toast.error(action.error.message);
    });
    builder.addCase(addProjectFunc.pending, (state, action) => {
      state.islodaing = true;
    });
  },
});
export default addProjectSlice.reducer;
