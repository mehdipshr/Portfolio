import React from 'react'
import About from './About/About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
// import SocialMedia from './SocialMedia';
import Cards from './Cards';

export default function Home() {
    return (
        <div id='Home'>
            <About/>
            <Skills/>
            <Portfolio/>
            <Cards/>
            <Contact/>
            {/* <SocialMedia/> */}
        </div>
    )
}
