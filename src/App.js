import React, {useEffect} from 'react';
import './App.css';
import GameScreen from "./screens/GameScreen";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
import ReactGA from 'react-ga';


ReactGA.initialize('G-ZK5PC3NQ91');
const App = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

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
