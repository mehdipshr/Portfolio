import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
// import { SiGmail } from "react-icons/si";
// import { BsTwitter } from "react-icons/bs";
export default function SocialMedia() {
    return (
        <div id='Socialmedia'>
            
            <div>
                <button className='soc-icons'><a className='ico-git-in' target='blank' href="https://www.facebook.com"><AiFillFacebook/></a></button>
                <button className='soc-icons'><a className='ico-git-in' target='blank' href="https://www.imstagram.com"><BsInstagram/></a></button>
                {/* <button className='soc-icons'><a className='ico-git-in' target='blank' href="https://www.gmail.com"><SiGmail/></a></button>
                <button className='soc-icons'><a className='ico-git-in' target='blank' href="https://www.twitter.com"><BsTwitter/></a></button> */}
            </div>
        </div>
    )
}
