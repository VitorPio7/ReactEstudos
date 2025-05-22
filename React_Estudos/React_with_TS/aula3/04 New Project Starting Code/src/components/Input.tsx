import { ComponentPropsWithoutRef } from "react";

type InputProps ={
    label:string;
    id:string;
    type: 'text'|'number'|'...'
} & ComponentPropsWithoutRef<'input'>;
/*faz com que nao seja necessário especificar o tipo de variável */
export default function Input({label,id,...props}:InputProps){
    return <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} type="text"></input>
    </p>
}