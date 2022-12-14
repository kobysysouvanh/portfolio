import React from 'react'
import { Link } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';

function Nav() {
    return (
        <header className="bg-neutral-900 h-50 sticky top-0 z-10">
            <div className="mx-auto flex pl-20 justify-between text-2xl">
                <nav className="text-gray-300 flex ">
                    <Link className="cursor-pointer inline-flex py-6 px-3 mr-4 hover:text-white hover:font-bold" to="home" smooth={true} duration={1500}>Home</Link>
                    <Link className="cursor-pointer inline-flex py-6 px-3 mr-4 hover:text-white hover:font-bold" to="about" smooth={true} duration={1500} offset={-100} >About</Link>
                    <Link className="cursor-pointer inline-flex py-6 px-3 mr-4 hover:text-white hover:font-bold" to="projects" smooth={true} duration={1500} offset={-100}>Projects</Link>
                    <Link className="cursor-pointer inline-flex py-6 px-3 mr-4 hover:text-white hover:font-bold" to="resume" smooth={true} duration={1500}>Resume</Link>
                    
                </nav>
                <div className="inline-flex px-3 my-auto">
                    <SocialIcon url="https://www.linkedin.com/in/kobysysouvanh/" className="mr-3" target="_blank" fgColor="black" bgColor="white"></SocialIcon>
                    <SocialIcon url="https://github.com/kobysysouvanh" className="mr-3" target="_blank" bgColor="white"></SocialIcon>
                </div>
            </div>
        </header>
    )
}

export default Nav