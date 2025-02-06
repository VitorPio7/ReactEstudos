import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const toggle = useSelector(state => state.showCounter)

  function incrementHandler() {
    dispatch({ type: 'INCREMENT' })
  }
  function increaseHandler() {
    dispatch({ type: 'INCREASE', amount: 10 })
  }
  function decrementHandler() {
    dispatch({ type: 'DECREMENT' })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' })
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
