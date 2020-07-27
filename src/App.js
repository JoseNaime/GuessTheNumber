import React, {Component} from 'react';
import './App.css';
import {Message} from "./components/message/message.component";
import {NumberInput} from "./components/number-input/number-input.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            attempts: 1,
            inputNumber: 0,
            message: 'Type a number',
            background: 'neutral',
            hasFinished: false
        }
    }

    onInputChange = (event) => {
        this.setState({inputNumber: event})
    }

    checkAnswer = () => {
        console.log(this.state.inputNumber)

        let message;
        let bgState;
        if (this.state.inputNumber === this.state.number) {
            message = `CONGRATS!! ${this.state.attempts} attempts`
            this.setState({hasFinished: true})
            bgState = 'right'
        } else if (this.state.inputNumber > this.state.number) {
            message = 'LOWER'
            bgState = 'lower'
        } else if (this.state.inputNumber < this.state.number) {
            message = 'HIGHER'
            bgState = 'higher'
        }

        this.setState({message: message})
        this.setState({background: bgState})
        this.setState({attempts: this.state.attempts + 1})
    }

    componentDidMount() {
        this.setState({number: Math.round(Math.random() * (100))})
    }

    render() {
        const attemptsMessage = (this.state.hasFinished) ?? <p>Attempts: {this.state.attempts}</p>;

        return (
            <div className='App'>
                <div className={`content ${this.state.background}`}>
                    <Message message={this.state.message}/>
                    {attemptsMessage}
                    <NumberInput onInputChange={this.onInputChange} checkAnswer={this.checkAnswer}/>
                </div>
            </div>
        );
    }
}

export default App;
