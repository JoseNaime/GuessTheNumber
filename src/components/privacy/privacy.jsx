import React, {useState} from 'react';

function Privacy(props) {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <section id="privacy" className={!isVisible ? 'hide' : '' } >
            <div className="wrapper">
                <h2>Privacy Policy Term</h2>
                <p className={'smallText'}>This Web collects some Personal Data from its Users.<a href={'https://www.iubenda.com/privacy-policy/25783020'} target="_blank">Privacy Policy</a></p>
                <div className="right">
                    <button onClick={() => window.close()}>Decline</button>
                    <button onClick={() => setIsVisible(false)}>Accept</button>
                </div>
            </div>
        </section>
    );
}

export default Privacy;