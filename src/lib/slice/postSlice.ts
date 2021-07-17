import { createAsyncThunk, createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { IPostItem } from "../../typings/db";
import { RootState } from "../store";
import axios from "axios";
const name = "post";

export const LoadPost = createAsyncThunk(`${name}/LoadPost`, async (data, thunkAPI) => {
  try {
    const response = await axios.get("/requests");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(await e.response.data);
  }
});

interface stateType {
  LoadPostLoading: boolean;
  LoadPostSuccess: boolean;
  LoadPostError: boolean;
  List: Array<IPostItem>;
}

const initialState: stateType = {
  LoadPostLoading: false,
  LoadPostSuccess: false,
  LoadPostError: false,
  List: [],
};

export const postSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoadPost.pending, (state) => {
      state.LoadPostLoading = true;
      state.LoadPostSuccess = false;
      state.LoadPostError = false;
    });
    builder.addCase(LoadPost.fulfilled, (state, action) => {
      console.log(action.payload);
      state.List = action.payload as Array<IPostItem>;
      state.LoadPostLoading = false;
      state.LoadPostSuccess = true;
    });
    builder.addCase(LoadPost.rejected, (state, { payload }: any) => {
      state.LoadPostLoading = false;
      state.LoadPostError = true;
    });
  },
});

// export const {  } = todoSlice.actions;

export const PostList = (state: RootState) => state.post.List;

export default postSlice.reducer;
