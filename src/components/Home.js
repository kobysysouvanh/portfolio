import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect'


function Home() {
    return (
        <div className="text-6xl flex py-56 justify-center">
            <TypeWriterEffect text="Hello, my name is Koby Sysouvanh" cursorColor='white' typeSpeed={100} hideCursorAfterText={true}/>
        </div>
    )
}

export default Home
