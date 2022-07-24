import React from 'react';
import './Skills.scss';
import Scroll from "../Scroll/Scroll";
import Bar from './Bar';

const photo = require('../../img/skills.png')
const union = require('../../img/skillsUnion.png')

function Skills() {
    return (
        <>
            <div id="skills">
                <div className="info">
                    <h2>Skills</h2>
                    <span className="bio">I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</span>
                    <div className="languages">
                        <div className="lang-item">
                            <div className="bar">
                                <p>90%</p>
                                <Bar procent={90}/>
                            </div>
                            <span>HTML5</span>
                        </div>
                        <div className="lang-item">
                            <div className="bar">
                                <p>75%</p>
                                <Bar procent={75}/>
                            </div>
                            <span>CSS3</span>
                        </div>
                        <div className="lang-item">
                            <div className="bar">
                                <p>75%</p>
                                <Bar procent={75}/>
                            </div>
                            <span>JavaScript</span>
                        </div>
                        <div className="lang-item">
                            <div className="bar">
                                <p>50%</p>
                                <Bar procent={50}/>
                            </div>
                            <span>C#</span>
                        </div>
                        <div className="lang-item">
                            <div className="bar">
                                <p>80%</p>
                                <Bar procent={80}/>
                            </div>
                            <span>SQL</span>
                        </div>
                        <div className="lang-item">
                            <div className="bar">
                                <p>30%</p>
                                <Bar procent={30}/>
                            </div>
                            <span>ReactJS</span>
                        </div>
                        <div className="lang-item">
                            <div className="bar">
                                <p>30%</p>
                                <Bar procent={30}/>
                            </div>
                            <span>AngularJS</span>
                        </div>
                    </div>
                </div>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={photo} alt="photo" className="photo"/>
                <img src={union} alt="union" className="union"/>
            </div>
            <Scroll/>
        </>
    );
}

export default Skills;