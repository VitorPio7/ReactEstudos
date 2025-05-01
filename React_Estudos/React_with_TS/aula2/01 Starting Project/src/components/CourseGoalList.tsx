import CourseGoal from "./CourseGoal";
import {CourseGoal as CGoal} from "../App";

type myProps ={
    goals:CGoal[];
}
export default function CourseGoalList({goals}:myProps){
    return <ul>
        {
          goals.map((goal)=>
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
            </CourseGoal>
          </li> 
        )
        }
    </ul>
}