import React, { useState, useEffect } from 'react'

const message = 'Welcome to my page'

function Home() {
    const [typedMessage, setMessage] = useState('')
    useEffect(() => {
        const timeout = setTimeout(() => {
            setMessage(message.slice(0, typedMessage.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
    }, [typedMessage])
    return (
        <div className="text-6xl flex py-56 justify-center">
            <span className="blinking-cursor text-6xl">{typedMessage}</span>
        </div>
    )
}

export default Home
