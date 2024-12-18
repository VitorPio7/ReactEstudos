import { useState, useRef } from "react";

export default function Player() {
  let playerName = useRef();
  let [name, setName] = useState("");

  function changeOnClick() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={changeOnClick}>Set Name</button>
      </p>
    </section>
  );
}
