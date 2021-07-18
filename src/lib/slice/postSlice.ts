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
  FilterList: Array<IPostItem>;
  filterA: { [prop: string]: any };
}

const initialState: stateType = {
  LoadPostLoading: false,
  LoadPostSuccess: false,
  LoadPostError: false,
  List: [],
  FilterList: [],
  filterA: {},
};

// 선택된 값이 들어있는 것들만 찾고 싶다.
// 선택이 해제 되면 전부 다 찾는다.
export const postSlice = createSlice({
  name,
  initialState,
  reducers: {
    filterMethod: (state, action) => {
      console.log(action.payload);
      state.FilterList = [];
      const { payload } = action;
      let b: string | any[] = [];
      for (const data in payload) {
        if (payload[data] === true) {
          b = b.concat(data);
        }
        console.log(state.FilterList);
      }
      console.log(b);
      // state.List.filter((item) => item.method.filter((it) => b.includes(it)));
      state.FilterList = state.List.filter((item) => item.method.some((it) => b.includes(it)));
      // state.List =state.List.filter(item => item.method.includes)
    },
  },
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

const PostState = (state: RootState) => state.post.List;

export const getFilterStatus = createSelector(PostState, (lists) => {
  return lists.filter(({ status }: { status: string }) => status === "상담중");
});

export const PostList = (state: RootState) => state.post.List;

export const { filterMethod } = postSlice.actions;
export default postSlice.reducer;
