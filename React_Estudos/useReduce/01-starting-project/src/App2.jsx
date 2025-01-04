import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        [action.value.name]: action.value.value,
      };
    }
    default:
      throw new Error("invalid Action Type");
  }
}

let initialState = { name: "", email: "", age: "" };

export default function App2() {
  let [state, sendFunction] = useReducer(reducer, initialState);

  function submitForm(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <form
      onSubmit={submitForm}
      onChange={(e) =>
        sendFunction({
          type: "CHANGE",
          value: { name: e.target.name, value: e.target.value },
        })
      }
    >
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="number" name="age" />
      <button type="submit">submit</button>
    </form>
  );
}
