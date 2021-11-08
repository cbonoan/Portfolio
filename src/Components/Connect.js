import React from 'react';

import '../Styles/Connect.scss';
function Connect() {
    return(
        <div id="contact-container">
            <div id="contact-title">
                <p>
                    Let's connect!😃
                </p>
            </div>
            <div id="contact-content">
                <p>
                    Thanks for dropping by! If you wanna get to know me better, shoot me an email and I'll try to get back to you as quickly as humanly possible.
                </p>
                <a className="btn btn-lg" href="mailto:charlesbonoan@gmail.com?">Say hey!</a>
            </div>
        </div>  
    )
}

export default Connect;