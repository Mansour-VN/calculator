import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addNumber, removNumber,getOperator , equal } from './redux/slice/calculator'

function App() {
  const calculator = useSelector(state => state.calculator)

  const dispatch = useDispatch()
  return (
    <div className="App">
     <div>
     <input className="display-box" type="text" id="result" disabled value={
      calculator.firstNumber + " " + calculator.operator + " " + calculator.SecondNumber + " = " + calculator.result} />
     <div className='numbers'>
        <button onClick={()=>dispatch(addNumber(1))}>1</button>
        <button onClick={()=>dispatch(addNumber(2))}>2</button>
        <button onClick={()=>dispatch(addNumber(3))}>3</button>
        <button onClick={()=>dispatch(addNumber(4))}>4</button>
        <button onClick={()=>dispatch(addNumber(5))}>5</button>
        <button onClick={()=>dispatch(addNumber(6))}>6</button>
        <button onClick={()=>dispatch(addNumber(7))}>7</button>
        <button onClick={()=>dispatch(addNumber(8))}>8</button>
        <button onClick={()=>dispatch(addNumber(9))}>9</button>
        <button onClick={()=>dispatch(addNumber(0))}>0</button>
    </div>
    <div className='operator'>
        <button onClick={()=>dispatch(getOperator('*'))}>*</button>
        <button onClick={()=>dispatch(getOperator('/'))}>/</button>
        <button onClick={()=>dispatch(getOperator('+'))}>+</button>
        <button onClick={()=>dispatch(getOperator('-'))}>-</button>
        <button onClick={()=>dispatch(equal())}> = </button>
        <button onClick={()=>dispatch(removNumber())}> Back </button>
    </div>
      </div>
    </div>
  );
}

export default App;
