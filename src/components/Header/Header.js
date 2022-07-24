import React, {useState} from 'react';
import './Header.scss';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(true);
    return (
        <>
            <header>
                <nav>
                    <ul className={isNavExpanded ? "nav-menu" : "responsive"}>
                        <li className="nav-item"><a href="#home">Home</a></li>
                        <li className="nav-item"><a href="#about">About</a></li>
                        <li className="nav-item"><a href="#skills">Skills</a></li>
                        <li className="nav-item"><a href="#works">Works</a></li>
                        <li className="nav-item"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <MenuOpenIcon className="menubtn" onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>
            </header>
        </>

);
}

export default Header;
