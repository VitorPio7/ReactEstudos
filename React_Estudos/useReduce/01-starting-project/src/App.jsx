import { useReducer } from "react";

function reducer(state, type) {
  switch (type.type) {
    case "increased":
      return ++state;
    case "decreased":
      return --state;
    case "refector":
      return (state = 0);
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "increased" })}>+</button>
      <button onClick={() => dispatch({ type: "decreased" })}>-</button>
      <button onClick={() => dispatch({ type: "refector" })}>refector</button>
    </div>
  );
}
