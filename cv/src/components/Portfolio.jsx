import React from 'react'
import firstimg from "../components/images/firstimg.jpg";
export default function Portfolio() {
    return (
        <div id='Port'>
            <h2 className='sections-titles'>Portfolio</h2>

            <div id='imag-section' >
                <div className='por-section'>
                    <div className='divspo'>
                        <img src={firstimg} alt="first" />
                    </div>
                    {/* <div className='divspo'>
                        <img src="" alt="" />
                    </div> */}
                </div>
                <div className='por-section'>
                    {/* <div className='divspo'>
                        <img src="" alt="" />
                    </div> */}
                    {/* <div className='divspo'>
                        <img src="" alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
