import React, {useState, useEffect} from 'react';
import {Slider} from "@material-ui/core";
import {Link} from "react-router-dom";

function GameScreen(props) {
    const [number, setNumber] = useState(0)
    const [attempts, setAttempts] = useState(1);
    const [inputNumber, setInputNumber] = useState(0);
    const [prevInputNumber, setPrevInputNumber] = useState(-1);
    const [message, setMessage] = useState('Type a number');
    const [background, setBackground] = useState('neutral');
    const [buttonAvailable, setButtonAvailable] = useState(true);

    useEffect(() => {
        setNumber(Math.round(Math.random() * (100)));
    }, [])

    const onInputChange = (event, newValue) => {
        setInputNumber(newValue);
        checkIfAvailable()
    }

    const checkIfAvailable = () => {
        setButtonAvailable(inputNumber !== prevInputNumber)
    }

    const checkAnswer = (event) => {
        event.preventDefault();
        let message;
        let bgState;
        if (inputNumber === number) { // Game Won
            message = `CONGRATS!!\n${attempts} attempts`
            setButtonAvailable(true)
            bgState = 'right'
        } else if (inputNumber > number) { // Number is Lower
            message = 'LOWER'
            bgState = 'lower'
        } else if (inputNumber < number) { // Number is Higher
            message = 'HIGHER'
            bgState = 'higher'
        }

        setPrevInputNumber(inputNumber); // Updates prev Input
        setButtonAvailable(false) // Disable Button to avoid multiple checks
        setMessage(message); // Set message
        setBackground(bgState) // Set bg color
        setAttempts(attempts + 1) // Add attempt
        return false
    }


    return (
        <div>
            <div className={`App ${background}`}>
                <div className={`wrapper content`}>
                    <Link to={`/`}>
                        <button className={`top circle`}>{'<'}</button>
                    </Link>
                    <div id='message'>
                        <h2>The number is</h2>
                        <h1>{message}</h1>
                    </div>
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
                        <button className={"center"} type={"submit"} value={"check"} disabled={!buttonAvailable}>Check
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GameScreen;