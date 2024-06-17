"use client";

import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { Meteors } from "@/app/components/ui/meteors";

export function About() {
  return (

    
    

    <div className="z-10 w-[90%] min-h-[20rem] p-[0.4rem] rounded-2xl bg-[#b15ef96f] mt-[1.5rem]">
        

    
      <div className=" w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-wrap justify-center items-center">
            

                <h1 className="font-bold text-3xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-[#f0fffb] to-[#fa59ef]"> About Me</h1>

                <span className="font-medium text-sm text-[#d0e0eeed]">
                    I am Ermiyas Tilahun who is passionate web developer. I am experienced full stack developer and 
                    currently I am working to master my frontend skills. 

                </span>

                <h1 className="font-bold pt-[1rem] text-3xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-[#f0fffb] to-[#fa59ef]"> About This Project</h1>

                <span className="font-medium text-sm text-[#d0e0eeed]">
                    This project includes solutions for the famous UI Challenges available at Frontend Mentor. It is created to develop 
                    and showcase my frontend skills by solving those challenge. This project is also very beneficials to those who are 
                    passionate web developers who has interest in forntend. You can practice by refering solutions in this project for 
                    challenges from <a href="https://www.frontendmentor.io/">Frontend Mentor</a>.

                    More challenges will be included whenever I solve them. My plan is to start small and get bigger through time. Explore 
                    github repos for my solutions and see the live demos in below section. 
                    <p className="font-medium italic pt-[0.8rem]">
                        Also find me on my socials in the header or see my portfolio: <a href="http://ermiyas.com" className="font-medium text-[#ba7cc9]">ermiyas.com</a>
                    </p>

                </span>
            



            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
            </div>
      </div>
    </div>

    
  );
}
