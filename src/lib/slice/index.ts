import { combineReducers } from "@reduxjs/toolkit";
import axios from "axios";
import postSlice from "./postSlice";

axios.defaults.baseURL = "http://localhost:4000";
export const rootReducer = combineReducers({
  post: postSlice,
});
