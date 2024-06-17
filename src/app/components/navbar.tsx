import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Navbar = () =>{
    return(
        <div className="sticky px-[5rem] top-0 z-50 w-full flex flex-wrap min-h-[4rem] bg-gradient-to-r from-[#140c20] via-[#3c175a] to-[#110632]">

            <div className="header flex w-[80%] justify-between m-auto py-[1rem]">
                <div>
                    <a href="https://ermiyas.com" className="font-semibold text-white">
                        Ermiyas.com
                    </a>
                </div>
                
                <div className="flex flex-wrap">
                    
                    <FaSquareGithub className="text-[#ffffff] mx-[0.2rem]" size={30}/>
                    <FaLinkedin className="text-[#ffffff] mx-[0.2rem]" size={30}/>
                    <FaSquareInstagram  className="text-[#ffffff] mx-[0.2rem]" size={30}/>
                    <FaSquareFacebook className="text-[#ffffff] mx-[0.2rem]" size={30}/>
                    
                </div>

            </div>

        </div>
    )
}

export default Navbar