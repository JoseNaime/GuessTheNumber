import React from 'react';
import './App.css';
import GameScreen from "./screens/GameScreen";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/game">
                        <GameScreen/>
                    </Route>
                    <Route path="/">
                        <HomeScreen/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
