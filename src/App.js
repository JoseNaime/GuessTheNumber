import React from 'react';
import './App.css';
import GameScreen from "./screens/GameScreen";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
import ReactGA from 'react-ga';

const App = () => {
    ReactGA.initialize('G-ZK5PC3NQ91'); // Aqui pones tu identificador
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/game">
                        <GameScreen/>
                        {ReactGA.pageview("/game")}
                    </Route>
                    <Route path="/">
                        <HomeScreen/>
                        {ReactGA.pageview("/home")}
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
