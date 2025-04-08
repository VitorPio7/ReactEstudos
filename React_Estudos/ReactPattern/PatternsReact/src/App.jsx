import { FlyOut } from './components/compoundComponent/FlyOut'

import './index.css'
function App() {


  return (
   <FlyOut>
    <FlyOut.Toggle>
    <FlyOut.List>
     <FlyOut.Item>Edit</FlyOut.Item>
     <FlyOut.Item>Delete</FlyOut.Item>
    </FlyOut.List>
    </FlyOut.Toggle>
   </FlyOut>
  )
}

export default App
