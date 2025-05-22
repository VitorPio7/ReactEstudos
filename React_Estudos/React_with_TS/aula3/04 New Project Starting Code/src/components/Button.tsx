import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'>&{
    href?:never;/*simboliza que isso nao deve ser atribuido */
}
type AnchorProps = ComponentPropsWithoutRef<'a'>&{
    href?:string; 
}
function isAnchorProps(props:ButtonProps|AnchorProps):props is AnchorProps{ /*verifica se o retorno é desse tipo especifico */
    return 'href' in props;
}
export default function Button(props:ButtonProps|AnchorProps){
    if(isAnchorProps(props)){
        return <a className="button"{...props}></a>
    }
    return <button className="button" {...props}></button>
}