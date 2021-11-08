import React, {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor-v2';
import ProgressBar from '@ramonak/react-progress-bar';

import '../Styles/ProgBar.scss'
function ProgBar(props) {
    const [xp, setXp] = useState(0)
    const onVisible = (isVisible) => {
        if(isVisible) {
            setXp(props.exp);
        } else if(!isVisible) {
            setXp(0)
        }
    }
    return(
        <VisibilitySensor 
        onChange={onVisible}
        >
            <div id="prog-bar-container">
                <div id="skill-logo">
                    <img src={props.skillImg} alt=""></img>
                </div>
                <div id="prog-bar-details">
                    <div id="prog-skill-details">
                        <span class="skill">{props.skill}</span>
                        <span class="percent">{props.exp}%</span>
                    </div>
                    <ProgressBar 
                        className="prog-bar"
                        transitionDuration="1.5s"
                        bgColor="#414A6B"
                        completed={xp}
                        isLabelVisible={false}
                        width="100%"
                        height="18px"
                    />
                </div>
                
            </div>
        </VisibilitySensor>
    );
}

export default ProgBar;