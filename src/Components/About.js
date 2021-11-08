import React, {} from 'react';

import '../Styles/About.scss'
import aboutImg from '../Images/photo.jpg'
// import ReactTypingEffect from 'react-typing-effect';

function About() {
    const githubLinkStyle = {
        color: "#FF5851",
        textDecoration: "none"
    }
    return(
        <div className="container-fluid" id="about-container">
            <div className="row flex-column flex-lg-row-reverse" id="about-header">
                <div id="about-img-col" className="col-xs-12 col-lg-7">
                    <span id="about-img">
                        <img src={aboutImg} alt="About headshot"></img>
                    </span>
                </div>
                <div className="col-xs-12 col-lg-5" id="about-title">
                    <p id="about-me">
                        {/* <ReactTypingEffect 
                            text="ABOUT ME."
                            speed={150}
                            typingDelay={500}
                            eraseDelay={100000}
                        /> */}
                        ABOUT ME.😄
                    </p>
                    <p id="about-paragraph">
                        <br/>
                        <span>Hey!</span> My name is Charles, and I like to make computers do things
                        by speaking their language. My love for coding began my freshman year of 
                        college when I took my first Computer Science course. From there, it was just
                        a snowball effect. I found myself trying to learn something new every week, whether
                        it be a new language, a new framework, or a new way to center a div. 
                        <br/>
                        <br/>
                        I have especially gained interest in full stack web development. Right now, I am practicing
                        my front-end skills by creating sample web pages. Click <a id="github-link" href="https://github.com/cbonoan/FrontendPractice" style={githubLinkStyle}>here </a> 
                        to see a repo of what I completed over the past few weeks! Currently, I'm looking for an opportunity where I can showcase 
                        my current skillset as well as develop and grow them. 
                        <br/>
                        <br/>
                        When I'm not coding, I'm either playing video games, lifting heavy things, or playing
                        with one of my four dogs.
                    </p>
                </div>
            </div>
        </div>
    );  
}

export default About;