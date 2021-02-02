import React from 'react';

function HomeScreen(props) {
    return (
        <div id={"homeScreen"}>
            <header >
                <figure id={"title"}>
                    <img src={process.env.PUBLIC_URL + "/GuessTheNumber.png"} alt='Title'/>
                </figure>
            </header>
            <main>
                <div id="initButtons" className="buttonsContainer column">
                    <button>Play</button>
                </div>

            </main>
        </div>
    );
}

export default HomeScreen;