import {type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react"

type ContainerProps<T extends ElementType>={
    as?: T; /*permite receber um elemento no ts, como <Button/> de forma genérica
    e opcional*/
    children:ReactNode;
}&ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>
({as,
 children,
...props}:ContainerProps<C>){
    const Component = as|| 'div';
    return <Component {...props}>{children}</Component>
}