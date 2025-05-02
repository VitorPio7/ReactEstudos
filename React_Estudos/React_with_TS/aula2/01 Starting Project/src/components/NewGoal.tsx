import {useRef, type FormEvent} from 'react';
export default function NewGoal(){
    const goal = useRef(null);
    const summary = useRef(null);
    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event?.preventDefault();
        const enteredGoal = goal.current!.value;
        new FormData(event.currentTarget);
    }
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input type="text" id="goal" ref={goal}/>
        </p>
        <p>
            <label  htmlFor="summary" >Your goal</label>
            <input type="text" id="summary" ref={summary} />
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}