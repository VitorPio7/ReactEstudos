import { createContext, useContext, useState } from "react";
import Icon from "./Icon"
const FlyOutContext = createContext()
export function FlyOut(props){
    const [open,toggle] = useState(false);
    return (
        <FlyOutContext.Provider value={{open,toggle}}>
          {props.children}
        </FlyOutContext.Provider>
    )
}
function Toggle(){
    const {open,toggle} = useContext(FlyOutContext);
    return <div onClick={()=>toggle(!open)}>
        <Icon/>
    </div>
}
function List({children}){
    const {open} = useContext(FlyOutContext);
    return open && <ul>{children}</ul>
}
function Item({children}){
    return <li>{children}</li>
}
FlyOut.Toggle = Toggle;/*redefine os nomes para facilitar o entendimento */
FlyOut.List = List;
FlyOut.Item = Item;