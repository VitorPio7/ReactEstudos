import { ReactNode } from "react";
type myChildren={children?:ReactNode};
export  default function Lists(props:myChildren){
    return <li>{props.children}</li>
}