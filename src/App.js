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
                    <Route path="/">
                        <HomeScreen/>
                    </Route>
                    <Route path="/game">
                        <GameScreen/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
