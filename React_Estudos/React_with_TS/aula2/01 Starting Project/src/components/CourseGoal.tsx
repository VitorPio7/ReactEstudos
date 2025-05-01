import { ReactNode, PropsWithChildren,FC } from "react"

// type CourseGoalProps ={
//     title:string;
//     children:ReactNode
// }

type CourseGoalProps = PropsWithChildren<{title:string}>/*alternativa para implementar sem o ReactNode */

export default function CourseGoal({title,
    children
    }:CourseGoalProps){
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>DELETE</button>
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