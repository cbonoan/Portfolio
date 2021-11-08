import React, {} from 'react'
import ProgBar from './ProgBar';

import '../Styles/Skills.scss'
import python from '../SVG/python.svg'
import js from '../SVG/javascript.svg'
import cpp from '../SVG/cpp.svg'
import java from '../SVG/java.svg'
import html from '../SVG/html.svg'
import css from '../SVG/css.svg'
import bootstrap from '../SVG/bootstrap.svg'
import react from '../SVG/react.svg'
import node from '../SVG/node.svg'
import express from '../SVG/express.svg'
function Skills() {
    const skills = {
        "progLang": [
            {
                "skill" : "Python",
                "exp"   : 90,
                "skillImg" : python
            },
            {
                "skill" : "Javascript",
                "exp"   : 85,
                "skillImg" : js
            },
            {
                "skill" : "C++",
                "exp"   : 70,
                "skillImg" : cpp
            },
            {
                "skill" : "Java",
                "exp"   : 70,
                "skillImg" : java
            }
        ],
        "frontend": [
            {
                "skill" : "React.js",
                "exp"   : 85,
                "skillImg" : react
            },
            {
                "skill" : "CSS",
                "exp"   : 90,
                "skillImg" : css
            },
            {
                "skill" : "HTML",
                "exp"   : 90,
                "skillImg" : html
            },
            {
                "skill" : "Bootstrap",
                "exp"   : 85,
                "skillImg" : bootstrap
            },
            {
                "skill" : "Javascript",
                "exp"   : 85,
                "skillImg" : js
            }
        ],
        "backend": [
            {
                "skill" : "Python Flask",
                "exp"   : 85,
                "skillImg" : python
            },
            {
                "skill" : "Node.js",
                "exp"   : 90,
                "skillImg" : node
            },
            {
                "skill" : "Express.js",
                "exp"   : 80,
                "skillImg" : express
            },
        ]
    }

    return(
        <div className="" id="skills-container">
            <div id="skills-title">
                <p>
                    SKILL SET.😮
                </p>
            </div>
            <div className="container-fluid" id="skills-list">
                <div className="row">
                    <div className="col-sm-12 col-lg-4" id="prog-langs">
                        <p className="skill-title">PROGRAMMING LANGUAGES</p>
                        {
                            skills["progLang"].map((elem) => {
                                return <ProgBar skill={elem["skill"]} exp={elem["exp"]} skillImg={elem["skillImg"]}/>
                            })
                        }
                    </div>
                    <div className="col-sm-12 col-lg-4" id="front-end">
                        <p className="skill-title">FRONT-END</p>
                        {
                            skills["frontend"].map((elem) => {
                                return <ProgBar skill={elem["skill"]} exp={elem["exp"]} skillImg={elem["skillImg"]}/>
                            })
                        }
                    </div>
                    <div className="col-sm-12 col-lg-4" id="back-end">
                        <p className="skill-title">BACK-END</p>
                        {
                            skills["backend"].map((elem) => {
                                return <ProgBar skill={elem["skill"]} exp={elem["exp"]} skillImg={elem["skillImg"]}/>
                            })
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Skills;