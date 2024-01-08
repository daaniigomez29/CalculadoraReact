import React from "react";

function Button(props){
    const handleClick = () =>{
        if(props.onClick){
            props.onClick(props.numero)
        }
    }
    return(
        <button className={props.className} onClick={handleClick}>{props.numero}</button>
    )
}
export default Button