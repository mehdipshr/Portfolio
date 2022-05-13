import React from 'react'
// import { Link } from 'react-router-dom';

import sun from "../components/images/sunset.jpg";
import { BsGithub } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";


export default function Header() {
    return (
        <div>
            <div id='header'>
                <div id='fix-nav'>
                    <ul className="nav justify-content-center">
                    <li className="nav-item">
                            <a className="nav-link" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">SKILLS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Port">PORTFOLIO</a> 
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="contact"></a> */}
                            {/* <Link className='nav-link' to='/contact'>CONTACT</Link> */}
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#Socialmedia">SOCIALMEDIA</a>
                        </li> */}
                    </ul>
                </div>
                <div>
                    <img id='profile-img' src={sun} alt="s" />
                </div>
                <div id='name-div-head'>
                    <h1 className='name'>Mehdi Pashapour</h1>
                    <h4 className='name'>Developer</h4>
                    <button id='down-btn'>Download CV</button>
                </div>
                <div id='icons-div'>
                    <button className='icons-g-f'><a className='ico-git-in' target='blank' href="https://github.com/mehdipshr"><BsGithub/></a></button>
                    <button className='icons-g-f'><a className='ico-git-in' target='blank' href="https://www.linkedin.com/feed/"><RiLinkedinLine/></a></button>
                </div>

            </div>
        
        
        </div>
    )
}

