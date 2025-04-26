import {useRef} from 'react';
export default function NewTodo(){
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    function  submitHandler(event:React.FormEvent){
        event.preventDefault();   
    }
    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}