import { configureStore } from '@reduxjs/toolkit'
import  calculatorReducer from "./slice/calculator"

 const  store = configureStore({
  reducer: {
  calculator :calculatorReducer,

},
})


export default store