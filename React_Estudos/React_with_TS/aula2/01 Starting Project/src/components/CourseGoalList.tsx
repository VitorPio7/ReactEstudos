import CourseGoal from "./CourseGoal";
import {CourseGoal as CGoal} from "../App";

type myProps ={
    goals:CGoal[];
    onDeleteGoal:(id:number)=>void;
}
export default function CourseGoalList({goals,onDeleteGoal}:myProps){
 
    return <ul>
        {
          goals.map((goal)=>
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                <p>{goal.description}</p>
            </CourseGoal>
          </li> 
        )
        }
    </ul>
}