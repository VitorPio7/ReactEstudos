 import {ReactNode} from "react";
 import Todo from '../models/todo';
 import Lists from "./Lists";
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
            <Lists key={item.id}>{item.text}</Lists>
              )}
           </ul>
}