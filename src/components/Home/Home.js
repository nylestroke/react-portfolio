import React from 'react';
import './Home.scss';
import Scroll from "../Scroll/Scroll";

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Home() {
    return (
        <>
            <div id="home">
                <div className="name">NYLESTROKE</div>
                <span className="bio">Trainee Front-end Developer</span>
                <div className="social">
                    <a href="https://twitter.com/nylestroke"><TwitterIcon/></a>
                    <a href="https://github.com/nylestroke"><GitHubIcon/></a>
                    <a href="https://linkedin.com/nylestroke"> <LinkedInIcon/></a>
                    <a href="https://instagram.com/nylestroke"> <InstagramIcon/></a>
                </div>
            </div>
            <Scroll/>
        </>
    );
}

export default Home;
