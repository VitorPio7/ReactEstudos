import useStore from "../store";
import {useState} from "react"

export default function TodosControl(){
    const addTodo = useStore((state)=>state.addTodo);
    const [text,setText] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        addTodo(text);
        setText("")
    }
    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
    )
}