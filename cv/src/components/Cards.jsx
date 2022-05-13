import React from 'react'

export default function Cards() {
    return (
    <div id='cards-div'>
        <h2 className='sections-titles'>Work Experience</h2>
        <div id='cards-section'>
            <div className="card border-success mb-3" style={{width:'20rem'}}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Success card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            
            <div className="card border-success mb-3" style={{width:'20rem'}}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Success card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card border-success mb-3" style={{width:'20rem'}}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Primary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
    )
}
