import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './redux/slice/calculator'

function App() {
  const count = useSelector((state) => state.calculator.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
     <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="by amount"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          By Amount
        </button>
      </div>
    </div>
  );
}

export default App;
