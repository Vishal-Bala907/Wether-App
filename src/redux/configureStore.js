import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import whetherSlice from "./whetherslice";

export default configureStore({
  reducer: {
    whether: whetherSlice,
  },
});
