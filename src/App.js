import React, {useEffect} from 'react';
import './App.css';
import GameScreen from "./screens/GameScreen";
import {Switch, Route, withRouter} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
import ReactGA from "react-ga";
import Privacy from "./components/privacy/privacy";

ReactGA.initialize('UA-188856045-2');

const App = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    })

    return (
        <div>
            <Privacy/>
        <Switch>

            <Route exact path="/game">
                <GameScreen/>
            </Route>
            <Route path="/">
                <HomeScreen/>
            </Route>

        </Switch>
        </div>
    )
}

export default withRouter(App);
