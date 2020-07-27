import React from "react";
import './message.style.css'

export const Message = ({message}) => {

    return(
        <div>
            <h1 className={'message'}>{message}</h1>
        </div>
    )
}