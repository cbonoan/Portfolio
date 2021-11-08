import React, {} from 'react';

import '../Styles/ProjCard.scss';

function ProjCard(props) {
    return(
        <div className="card">
            <img src={props.project["previewImg"]} alt="Project preview"></img>
                
            <div className="card-body">
                <h5 className="card-title">{props.project["projName"]}</h5>

                <div className={"accordion card-accordion"+props.cardNum}>
                    <div className="accodion-item">
                        <h2 className="accordion-header" id={"card-proj-description"+props.cardNum}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne"+props.cardNum} aria-expanded="false" aria-controls={"collapseOne"+props.cardNum}>
                                Description
                            </button>
                        </h2>
                    </div>
                    <div id={"collapseOne"+props.cardNum} className="accordion-collapse collapse" aria-labelledby={"card-proj-description"+props.cardNum} data-bs-parent={".card-accordion"+props.cardNum}>
                        <div className="accordion-body">
                            {props.project["description"]}
                        </div>
                    </div>
                    <div className="accodion-item">
                        <h2 className="accordion-header" id={"card-proj-contrib"+props.cardNum}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseTwo"+props.cardNum} aria-expanded="false" aria-controls={"collapseTwo"+props.cardNum}>
                                Contributions
                            </button>
                        </h2>
                    </div>
                    <div id={"collapseTwo"+props.cardNum} className="accordion-collapse collapse" aria-labelledby={"card-proj-contrib"+props.cardNum} data-bs-parent={".card-accordion"+props.cardNum}>
                        <div className="accordion-body">
                            {props.project["contribs"]}
                        </div>
                    </div>
                </div>

                {/* <p className="card-text">{props.project["description"]}</p>
                <p className="card-text">{props.project["contribs"]}</p> */}
                <span id="proj-tags">
                    {
                        props.project["tags"].sort().map((tag) => {
                            return <span className="proj-tag">{tag}</span>
                        })
                    }
                </span>
                <span id="card-links">
                    <a href={props.project["projLink"]} target="_blank" rel="noreferrer" className="proj-card-btn btn">Live Site</a>
                    <a href={props.project["projGithub"]} target="_blank" rel="noreferrer" className="proj-card-btn btn">Source Code</a>
                </span>
            </div>
        </div>
    )
}

export default ProjCard;