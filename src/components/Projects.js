import React from 'react'

function Projects() {
    return (
        <div className="flex items-center justify-center flex-col py-10" id="projects">
            <h1 className="text-4xl font-bold py-10">Projects</h1>
            <div className="flex items-center justify-center flex-col">
                <a className="text-2xl hover:text-sky-300" target="_blank" rel="noreferrer" href="https://bill-splitter-3e4ab.web.app/">Bill Splitter</a>
                <a className="text-2xl hover:text-sky-300" target="_blank" rel="noreferrer" href="https://covid-19-live-tracker-8a348.web.app/">Covid-19 Tracker</a>
            </div>
        </div>
    )
}

export default Projects