import React, {useEffect} from 'react';
import './App.css';
import GameScreen from "./screens/GameScreen";
import {Switch, Route, withRouter} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
import ReactGA from "react-ga";

ReactGA.initialize([{trackingId:'G-ZK5PC3NQ91',
debug: true}]);

const App = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    })

    return (
        <Switch>
            <Route exact path="/game">
                <GameScreen/>
            </Route>
            <Route path="/">
                <HomeScreen/>
            </Route>
        </Switch>
    )
}

export default withRouter(App);
