import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: 0,
  SecondNumber: 0,
  result: 0,
  operator:'',
  histori :[]
};

const calculate = {
  '+': (x,y)=>x+y,
  '-': (x,y)=>x-y,
  '/': (x,y)=>x/y,
  '*': (x,y)=>x*y,
}

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumber: (state,action) => { // 
      if(state.operator)
        {
            state.SecondNumber = state.SecondNumber *10 + action.payload
        }
        else
        {
            state.firstNumber = state.firstNumber *10 + action.payload
        }
        console.log("add , First : " , state.firstNumber)
        console.log("add , Second : " , state.SecondNumber)

    },
    removNumber: (state) => {
      if(state.operator)
        {
            state.SecondNumber = Math.floor(state.SecondNumber / 10)
        }
        else
        {
            state.firstNumber = Math.floor(state.firstNumber / 10)
        }

        console.log("rm , First : " , state.firstNumber)
        console.log("rm , Second : " , state.SecondNumber)



    },
    getOperator:(state,action)=>{
      if(!state.operator)
          state.operator = action.payload
      else
        {
          state.result = calculate[state.operator](state.firstNumber,state.SecondNumber);
          state.firstNumber = state.result
          state.operator = action.payload
          state.SecondNumber=0
        }
        console.log("operator" , state.result)
    },
    equal:(state)=>{
      if(!state.operator)
        state.result = state.firstNumber
      else
      {
        
        state.result = calculate[state.operator](state.firstNumber,state.SecondNumber);
        console.log("result" , state.result)
      }
    }
  },
});

//fullClear
//clear active number
//- + number
//history
//pwa


// Action creators are generated for each case reducer function
export const { addNumber, removNumber, getOperator , equal } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
