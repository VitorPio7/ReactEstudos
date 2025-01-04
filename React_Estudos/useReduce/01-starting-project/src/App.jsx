import { useReducer } from "react";

function reduce(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return 0;
  }
}

function App() {
  let [count, dispatch] = useReducer(reduce, 0);
  console.log(count);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default App;
