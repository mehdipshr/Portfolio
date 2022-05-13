import React from 'react'

export default function Skills() {
    return (
        <div id='Skills'>
            <h2 id='pro-skills-h'>Professional Skills</h2>
            <div id='Skills-progress'>
                <h6>HTML/CSS</h6>
                <div class="progress">
                    <div className="progress-bar bg-warning" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
                <h6>Javascript</h6>
                <div class="progress">
                    <div className="progress-bar" role="progressbar" style={{width:'55%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                
            </div>
        </div>
    )
}
