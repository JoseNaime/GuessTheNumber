import React, {useState, useEffect} from 'react';
import {Slider} from "@material-ui/core";
import {Link} from "react-router-dom";

function GameScreen(props) {
    const [number, setNumber] = useState(0)
    const [attempts, setAttempts] = useState(1);
    const [inputNumber, setInputNumber] = useState(0);
    const [message, setMessage] = useState('Type a number');
    const [background, setBackground] = useState('neutral');
    const [ setHasFinished] = useState(false);

    const onInputChange = (event, newValue) => {
        setInputNumber(newValue);
    }

    useEffect(() => {
        setNumber(Math.round(Math.random() * (100)));
    }, [])

    const checkAnswer = (event) => {
        event.preventDefault();
        let message;
        let bgState;
        if (inputNumber === number) {
            message = `CONGRATS!!\n${attempts} attempts`
            setHasFinished(true)
            bgState = 'right'
        } else if (inputNumber > number) {
            message = 'LOWER'
            bgState = 'lower'
        } else if (inputNumber < number) {
            message = 'HIGHER'
            bgState = 'higher'
        }

        setMessage(message);
        setBackground(bgState)
        setAttempts(attempts + 1)
        return false
    }


    return (
        <div>
            <div className={`App ${background}`}>
                <div className={`wrapper content`}>
                    <Link to={`/`}>
                        <button className={`top circle`}>{'<'}</button>
                    </Link>
                    <h1 className={'message'}>{message}</h1>
                    <form className={'column'} onSubmit={checkAnswer}>
                        <label className={'column'}>
                            <p>{inputNumber}</p>
                            <div className={'slider'}>
                                <p>0</p>
                                <Slider id="valueSlider" value={inputNumber} onChange={onInputChange}
                                        step={1} min={0} max={100}/>
                                <p>100</p>
                            </div>
                        </label>
                        <button className={"center"} type={"submit"} value={"check"}>Check</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GameScreen;