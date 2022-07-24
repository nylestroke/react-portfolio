import React from 'react';
import './Footer.scss';

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const union = require('../../img/footerUnion.png')

function Footer() {
    return (
        <div id="down">
            <h3>nylestroke</h3>
            <div className="social-media">
                <a href="https://twitter.com/nylestroke"><TwitterIcon/></a>
                <a href="https://github.com/nylestroke"><GitHubIcon/></a>
                <a href="https://linkedin.com/nylestroke"> <LinkedInIcon/></a>
                <a href="https://instagram.com/nylestroke"> <InstagramIcon/></a>
            </div>
            <span>All Rights Reserved <span className="copyright">C</span> 2022 nylestroke <span className="heart">&#10084;</span></span>
            <img src={union} alt="union" className="union"/>
        </div>
    );
}

export default Footer;