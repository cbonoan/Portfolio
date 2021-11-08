import React, {useEffect, useState} from 'react';
import ProjCard from './ProjCard';
import Aos from "aos";
import "aos/dist/aos.css";

import '../Styles/Projects.scss'
import mindSanc from '../Images/mind_sanc.JPG';
import cse from '../Images/cse.JPG';
import eCommerce from '../Images/eCommerce.JPG'
function Projects() {
    const [viewWidth, setViewWidth] = useState(window.innerWidth);
    const [fadeDelay, setFadeDelay] = useState(true);
    useEffect(() => {
        Aos.init({
            duration: 1000
        });

        if(viewWidth < 992) {
            setFadeDelay(false);
        }
    }, [viewWidth])
    const projects = {
        "cse": {
            "previewImg": cse,
            "projName": "CSE Medical Transport Website",
            "description": "I created a web page for a local medical transport business using the MERN stack.",
            "contribs": "I created the whole web page from font-end to back-end. The front-end framework was created using React.js and the back-end server was created using Express.js. On this website, users can give feedback, request a ride, or apply to the company.",
            "tags": ["Mongo", "Express", "React", "Node"],
            "projLink": "https://csemedi.com",
            "projGithub": "https://github.com/cbonoan/cseWebsite"
        },
        "eCommerce": {
            "previewImg": eCommerce,
            "projName": "E-commerce Clone",
            "description": "Upon learning React, I decided to better my front-end skills. I found this project online and decided to do it because I saw that it would also be a great way to practice React. In the Github link, you will also see other web pages I completed to better my design skills.",
            "contribs": "Using React and Bootstrap, I created an e-commerce product page for a sneaker. I included different functionalities such as being able to go through the different pictures, adding items to the cart, and also removing items from the cart.",
            "tags": ["React", "Bootstrap", "JS"],
            "projLink": "https://cbonoan.github.io/eCommerceProject/",
            "projGithub": "https://github.com/cbonoan/FrontendPractice#e-commerce"
        },
        "mindSanctuary": {
            "previewImg": mindSanc,
            "projName": "Mind Sanctuary",
            "description": "For my senior project, my group and I decided to create something that would help people struggling mentally with the pandemic quarantine. We decided to create a web application that would recommend different hobbies to people based on their mood.",
            "contribs": "Created the front-end design for the landing page, as well as the login/sign up forms. In terms of backend, I worked on the login/sign up functionality (i.e. checking user information with our database and sanitizing the form inputs). Lastly, I was in charge of the main Github repository where all the pull requests where made to, and where I reviewed each pull request.",
            "tags": ["Python", "Flask", "JS", "MySQL"],
            "projLink": "https://mindsanctuary.dev",
            "projGithub": "https://github.com/cbonoan/Senior-Project"
        }
    }
    return(
        <div id="projects-container">
            <div id="projects-title">
                <p>Some Things I've Worked On.🤓</p>
            </div>
            <div className="container-fluid" id="project-cards">
                <div className="row">
                    {
                        Object.keys(projects).map((project, index) => {
                            return(
                                <div data-aos="fade-up" data-aos-delay={fadeDelay && index*250} className="col-xs-12 col-lg-4 project-card">
                                            <ProjCard project={projects[project]} cardNum={index} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;