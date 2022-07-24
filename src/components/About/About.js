import React from 'react';
import './About.scss';
import Scroll from "../Scroll/Scroll";

const photo = require('../../img/photo.png');
const union = require('../../img/aboutUnion.png');

function About() {
    return (
        <>
            <div id="about">
                <img src={union} alt="union" className="union"/>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={photo} alt="photo"/>
                <div className="about">
                    <h2>About me</h2>
                    <span>An inquisitive Programmer student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.</span>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Download CV</a>
                </div>
            </div>
            <Scroll />
        </>
    );
}

export default About;