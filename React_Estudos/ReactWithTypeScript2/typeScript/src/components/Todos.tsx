 import {ReactNode} from "react";
 import Todo from '../models/todo'
// type Props = {
//     items:number[];
//     children?:ReactNode;
// }
// const Todos = (props:Props)=>{
//     return <ul>{props.children}</ul>
// }

// export default Todos;
type Props ={
    items:Todo[];
    children?:ReactNode
}
export default function Todos(props:Props){
    return <ul>{props.items.map((item)=>
              <li key={item.id}>{item.text}</li>)}
           </ul>
}