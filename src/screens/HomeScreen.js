import React from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

function HomeScreen(props) {
    return (
        <div id={"homeScreen"}>
            <Helmet>
                <title>Guess The Number | Home</title>
                <meta name="description" content="Home | Try to guess the hidden/random number" />
            </Helmet>

            <header>
                <figure id={"title"}>
                    <img src={process.env.PUBLIC_URL + "/GuessTheNumber.png"} alt='Guess The Number Title'/>
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