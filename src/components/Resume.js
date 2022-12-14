import React from 'react'
import resume from './resume.png';


function Resume() {

    return (
        <div className="flex items-center justify-center flex-col py-10" id="resume"> 
            <h1 className="text-4xl font-bold py-10">Resume</h1>
            <img src={resume} alt="Resume" className="rounded-lg w-2/5"/>
        </div>
    )
}

export default Resume
