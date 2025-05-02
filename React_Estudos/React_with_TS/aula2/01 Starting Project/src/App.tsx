import {useState} from 'react';
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import CourseGoalList from './components/CourseGoalList';
export type CourseGoal = {
  title: string;
  description: string;
  id:number;
}
export default function App() {
  const [goals,setGoals] = useState<Array<CourseGoal>>([]);
  function handleAddGoal(){
      setGoals(prevGoals =>{
        const newGoal: CourseGoal = {
          id: Math.random(),
          title:'Learn React + TS',
          description:"Learn it in depth!"
        }
        return [...prevGoals,newGoal]
      })
  }
  function handleDeleteGoal(id:number){
         setGoals(prevGoals=>prevGoals.filter((goal)=>goal.id !== id))
  }
  return <main>
    <Header image={{src:'goals.jpg',alt:'A list of goals'}}>
       <h1>Your Course Goals</h1>
    </Header>
    <button onClick={handleAddGoal}>Add Goal</button>
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    {/* <ul>
    {goals.map((goal)=>(
       <CourseGoalList key={goal.id} 
        title={goal.title}>
          <p>{goal.description}</p>
       </CourseGoalList>

    ))} 
    </ul> */}
   
    {/* {goals.map((goal)=>(
      <li key={goal.id}>
           <CourseGoal title={goal.title} >
            <p>{goal.description}</p>
           </CourseGoal>   
      </li>
    ))} */}
    
   </main>
}
