import React from 'react';
import {Link} from "react-router-dom";

function HomeScreen(props) {
    return (
        <div id={"homeScreen"}>
            <header >
                <figure id={"title"}>
                    <img src={process.env.PUBLIC_URL + "/GuessTheNumber.png"} alt='Title'/>
                </figure>
            </header>
            <main>
                <div className="buttonsContainer column">
                    <Link to={`/game`}>
                        <button>Play</button>
                    </Link>

                </div>

            </main>
        </div>
    );
}

export default HomeScreen;