import React from "react";

function Button(props){
    const handleClick = () =>{
        if(props.onClick){
            props.onClick(props.boton)
        }
    }
    return(
        <button className={props.className} onClick={handleClick}>{props.boton}</button>
    )
}
export default Button