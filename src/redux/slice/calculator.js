import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: 0,
  SecondNumber: 0,
  thirdNumber: 0,
  result: 0,
  oparator:
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
