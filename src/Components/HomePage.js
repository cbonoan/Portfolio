import React, {useState, useEffect, useCallback} from 'react';
import ReactTypingEffect from 'react-typing-effect';

import '../Styles/HomePage.scss';
function HomePage() {
    const [bgWidth, setbgWidth] = useState(50);
    const [y, setY] = useState();

    useEffect(() => {
        setY(window.scrollY);
    }, [])

    const changeBgWidth = useCallback(
        (e) => {
            // console.log(e.currentTarget.scrollY);
            const tmpWindow = e.currentTarget;
            if(y < tmpWindow.scrollY) {
                if(y > 0) {
                    setbgWidth(25);
                } 
                if(y > window.innerHeight/2) {
                    setbgWidth(0);
                }
            } else if(y > tmpWindow.scrollY) {
                if(y < window.innerHeight-500) {
                    setbgWidth(50);
                }
            }
            setY(tmpWindow.scrollY);
        }, [y]
    )

    useEffect(() => {
        window.addEventListener("scroll", changeBgWidth);

        return () => {
            window.removeEventListener("scroll", changeBgWidth);
        }
    }, [changeBgWidth])

    
    
    return(
        <div id="home-page">
            <div id="home-bg-1" style={{width: bgWidth+"%"}}></div>
            <span id="greeting">
                HI 👋
                <br/>I'M
                <br/>
                <ReactTypingEffect 
                    text="CHARLES BONOAN"
                    speed={150}
                    typingDelay={1000}
                    eraseDelay={100000}
                    cursorClassName="cursor"
                />
            </span>
        </div>
    );
}

export default HomePage;