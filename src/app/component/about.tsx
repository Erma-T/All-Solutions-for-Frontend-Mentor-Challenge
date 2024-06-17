import React from "react";

const About = () => {
    return(
        <div className="w-full min-h-[20rem] bg-slate-400 px-[5rem] py-[2rem] rounded-2xl">

            <h1 className="font-bold text-lg"> About Me</h1>

            <span className="font-medium text-sm">
                I am Ermiyas Tilahun who is passionate web developer. I am experienced full stack developer and 
                currently I am working to master my frontend skills. 

            </span>

            <h1 className="font-bold text-lg"> About This Project</h1>

            <span className="font-medium text-sm">
                This project includes solutions for the famous UI Challenges available at Frontend Mentor. It is created to develop 
                and showcase my frontend skills by solving those challenge. This project is also very beneficials to those who are 
                passionate web developers who has interest in forntend. You can practice by refering solutions in this project for 
                challenges from <a href="https://www.frontendmentor.io/">Frontend Mentor</a>.

                More challenges will be included whenever I solve them. My plan is to start small and get bigger through time. Explore 
                github repos for my solutions and see the live demos in below section. 
                <p className="font-medium text-lg italic pt-[1rem]">
                    Also find me on my socials in the header or see my portfolio: <a href="http://ermiyas.com" className="font-bold text-blue-700">ermiyas.com</a>
                </p>

            </span>

        </div>
    )
}

export default About