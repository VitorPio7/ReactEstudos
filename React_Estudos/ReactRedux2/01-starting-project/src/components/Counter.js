import classes from './Counter.module.css';
import counterActions from '../store/counter'
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.value.counter)
  const toggle = useSelector(state => state.value.showCounter)

  function incrementHandler() {
    dispatch(counterActions.increment())
  }
  function increaseHandler() {
    dispatch(counterActions.increase(10))
  }
  function decrementHandler() {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
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
