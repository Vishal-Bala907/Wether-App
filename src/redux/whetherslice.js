import { createSlice } from "@reduxjs/toolkit";
import dummyCurrent from "../dummydata/dummyCurrent";
import hourlyDummy from "../dummydata/hourly";

const whetherSlice = createSlice({
  name: "whether",

  initialState: {
    oneDay: [{}],
    threeDay: [{}],
    sevenDay: [{}],
    fourteenDay: [{}],
    todayHourly: [{}],
    location: "",
    currentCondition: {},
    isWetherLoading: false,
  },
  reducers: {
    setWethers: (state, whether) => {
      //! setting location
      state.location = whether.payload.address;

      //! setting current condition
      state.currentCondition = whether.payload.currentConditions;
      // state.currentCondition = dummyCurrent;

      //? Setting hourly
      state.todayHourly = whether.payload.days[0].hours;
      // state.todayHourly = hourlyDummy;

      //^ three days
      state.threeDay = whether.payload.days.slice(0, 3);
      //^ 7 days
      state.sevenDay = whether.payload.days.slice(0, 7);
      //^ 14 days
      state.fourteenDay = whether.payload.days.slice(0, 14);
    },
    setIsWetherLoading: (state, load) => {
      state.isWetherLoading = load.payload;
    },
  },
});

export const { setWethers, setIsWetherLoading } = whetherSlice.actions;

export default whetherSlice.reducer;
