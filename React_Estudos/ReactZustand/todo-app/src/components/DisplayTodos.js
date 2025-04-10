import useStore from "../store/index"
export default function DisplayTodos(){
    const {todos,deleteTodo} = useStore((state)=>{
        return {todos:state.todos,deleteTodo:state.deleteTodo};
    })
    return (
        <ul>
            {todos.map((todo)=>
              <li key={todo.id}>
                {todo.text}
                <button onClick={()=>toggleTodo(todo.id)}>Delete</button>
                {todo.text}
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
              </li>
            )}
        </ul>
    )
}