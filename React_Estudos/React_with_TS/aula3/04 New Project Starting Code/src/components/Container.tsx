import { type ElementType } from "react"

type ContainerProps={
    as: ElementType /*permite receber um elemento no ts, como <Button/> */
}

export default function Container({as}:ContainerProps){
    const Component = as;
    return <Component/>
}