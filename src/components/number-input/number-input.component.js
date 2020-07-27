import React from "react";
import InputNumber from "rc-input-number";
import './number-input.style.css'

export const NumberInput = ({onInputChange,checkAnswer}) => {


    return(
        <div>
            <InputNumber className={'input'} min={0} max={100} onChange={onInputChange} onPressEnter={checkAnswer} />
            <button onClick={checkAnswer}>check</button>
        </div>
    )
}