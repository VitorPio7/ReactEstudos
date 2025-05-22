import { ReactNode, PropsWithChildren,FC } from "react"

// type CourseGoalProps ={
//     title:string;
//     children:ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
    id:number; 
    title:string;
    onDelete:(id:number)=>void
}>/*alternativa para implementar sem o ReactNode */

export default function CourseGoal({title,id,
    children,onDelete
    }:CourseGoalProps){
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={()=>onDelete(id)}>DELETE</button>
        </article>
    )
}
/*Outra possivel sintaxe */
// const CourseGoal:FC<CourseGoalProps> =({title,children})=>{
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }

// export default CourseGoal;