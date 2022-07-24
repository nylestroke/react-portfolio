import React, {useState} from 'react';
import './Works.scss';
import Scroll from "../Scroll/Scroll";

import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import photo from '../../img/worksImage.png';
import photo2 from '../../img/worksImage2.png';
import photo3 from '../../img/worksImage3.png';
import photo4 from '../../img/worksImage4.png';
import photo5 from '../../img/worksImage5.png';

import union from '../../img/worksUnion.png';

function Works() {
    const [element, setElement] = useState(0);
    const elements = 5;

    function modElement(mod) {
        setElement((elements * 2 + element + mod) % elements);
    }
    return (
        <>
            <div id="works">
                <div className="work-img">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={[photo, photo2, photo3, photo4, photo5][element % 5]} alt="photo" className="photo"/>
                    <span className="arrow"  data-display={element < elements - 1} onClick={() => modElement(1)}><ArrowForwardIcon/></span>
                    <span className="arrowLeft" data-display={element > 0} onClick={() => modElement(-1)}><ArrowBackIcon/></span>
                </div>
                <img src={union} alt="union" className="union"/>

                <div className="information">
                    <h2>Works</h2>
                    <div className="slider" style={{
                        "--offset": element
                    }}>
                        <div className="element">
                            <h3>Personal Portolio</h3>
                            <span id="info">Complete Portfolio Website - HTML/CSS In this project, we are going to learn and build how to create a complete portfolio website using HTML and CSS. We will understand everything from scratch. </span>
                            <div className="lang-block">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>JavaScript</p>
                            </div>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="https://github.com/nylestroke/PersonalWebsite" className="gh-link">
                                <GitHubIcon/>
                            </a>
                        </div>
                        <div className="element">
                            <h3>Movie App</h3>
                            <span id="info">Simple movie app created using ASP.NET Core 6.0 with able to watch a movies.</span>
                            <div className="lang-block">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>ASP .NET Core</p>
                                <p>C#</p>
                            </div>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="https://github.com/nylestroke/MovieAppAPI" className="gh-link">
                                <GitHubIcon/>
                            </a>
                        </div>
                        <div className="element">
                            <h3>Bubble Sort JS</h3>
                            <span id="info">Simple Bubble Sorting script using JavaScript</span>
                            <div className="lang-block">
                                <p>HTML5</p>
                                <p>JavaScript</p>
                            </div>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="https://github.com/nylestroke/BubbleSortJS" className="gh-link">
                                <GitHubIcon/>
                            </a>
                        </div>
                        <div className="element">
                            <h3>DiscordJS - RayaBot</h3>
                            <span id="info">Simple discord moderation mod with funny functions.</span>
                            <div className="lang-block">
                                <p>JavaScript</p>
                                <p>DiscordJS</p>
                            </div>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="https://github.com/nylestroke/rayabot" className="gh-link">
                                <GitHubIcon/>
                            </a>
                        </div>
                        <div className="element">
                            <h3>JQuery Example code</h3>
                            <span id="info">jQuery simple web application with DOM manipulation.</span>
                            <div className="lang-block">
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>JavaScript</p>
                                <p>JQuery</p>
                            </div>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <a href="https://github.com/nylestroke/jQueryExample" className="gh-link">
                                <GitHubIcon/>
                            </a>
                        </div>
                    </div>
                    <span id="number">{(element + 1).toString().padStart(2, "0")}</span>
                    <div className="progress-bar">
                        {Array(elements).fill(null).map((_, i) => <span className="bar" key={i} data-active={i === element}/>)}
                    </div>
                </div>
            </div>
            <Scroll/>
        </>
    );
}

export default Works;