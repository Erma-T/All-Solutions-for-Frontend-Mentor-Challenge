import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";

const Navbar = () =>{
    return(
        <div className="sticky lg:px-[5rem] top-0 z-50 w-full flex flex-wrap min-h-[4rem] bg-gradient-to-r from-[#140c20] via-[#3c175a] to-[#110632]">

            <div className="header flex w-[80%] justify-between m-auto py-[1rem]">
                <div>
                    <a href="/" className="font-medium text-white">
                        HOME
                    </a>
                </div>
                
                <div className="flex flex-wrap">
                    
                    <a href="https://github.com/Erma-T" target="_blank"><FaSquareGithub className="text-[#ffffff] mx-[0.2rem]" size={30}/></a>
                    <a href="https://www.linkedin.com/in/ermiyas-tilahun/" target="_blank"><FaLinkedin className="text-[#ffffff] mx-[0.2rem]" size={30}/></a>
                    
                </div>

            </div>

        </div>
    )
}

export default Navbar