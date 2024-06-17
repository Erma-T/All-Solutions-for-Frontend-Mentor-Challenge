"use client";

import React from "react";
import { WobbleCard } from "@/app/components/ui/wobble-card";

export function Card() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
      
      <div className="col-span-1 lg:col-span-1 h-full min-h-[500px] lg:min-h-[300px] py-[1rem]">
                
        <div className="flex flex-wrap justify-center justify-items-center">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-1 h-full"
            className="grid grid-rows-6"
          >
            <div  className="row-span-3 w-full ">
              <div className="w-[18rem] h-[8.5rem] bg-cover bg-center bg-no-repeat bg-[url('/screenshots/ch1-desktop-preview.jpg')]">
                
              </div>
            </div>
            <div  className="row-span-1 w-full pl-[1rem] py-[0.2rem] justify-center">
              <h2 className="text-left font-semibold text-white">
                QR Code Compnent
              </h2>

            </div>
            <div  className="row-span-2 w-full px-[1rem]">
              <p className="text-left text-sm font-light text-white">
               A challenge is to build out this QR code component.
              </p>
              <span className="text-left text-xs italic font-light mx-1 text-white">#HTML</span>
              <span className="text-left text-xs italic font-light mx-1 text-white">#CSS</span>

            </div>
            
            
          </WobbleCard>
          <div  className="z-30 flex flex-wrap px-[1rem] py-[0.7rem] w-full justify-center justify-items-stretch">
              <p className="text-left text-sm font-light text-white">
                <a href="https://erma-t.github.io/QR-code-component-frontendmentor/" target="_blank">Live </a> &nbsp;&nbsp;| &nbsp;&nbsp;
                <a href="https://github.com/Erma-T/QR-code-component-frontendmentor" target="_blank">Git Repo</a> &nbsp;&nbsp;| &nbsp;&nbsp; 
                <a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H" target="_blank">Challenge</a></p>
          </div>
        
        </div>

      </div>

      <div className="col-span-1 lg:col-span-1 h-full min-h-[500px] lg:min-h-[300px] py-[1rem]">
                
        <div className="flex flex-wrap justify-center justify-items-center">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-1 h-full"
            className="grid grid-rows-6"
          >
            <div  className="row-span-3 w-full ">
              <div className="w-[18rem] h-[8.5rem] bg-cover bg-center bg-no-repeat bg-[url('/screenshots/ch2-desktop-preview.jpg')]">
                
              </div>
            </div>
            <div  className="row-span-1 w-full pl-[1rem] py-[0.2rem] justify-center">
              <h2 className="text-left font-semibold text-white">
                Contact form
              </h2>

            </div>
            <div  className="row-span-2 w-full px-[1rem]">
              <p className="text-left text-sm font-light text-white">
               A challenge is to build out this contact form.
              </p>
              <span className="text-left text-xs italic font-light mx-1 text-white">#HTML</span>
              <span className="text-left text-xs italic font-light mx-1 text-white">#CSS</span>

            </div>
            
            
          </WobbleCard>
          <div  className="z-30 flex flex-wrap px-[1rem] py-[0.7rem] w-full justify-center justify-items-stretch">
              <p className="text-left text-sm font-light text-white">
                <a href="https://erma-t.github.io/contact-form-frontendmentor/" target="_blank">Live </a> &nbsp;&nbsp;| &nbsp;&nbsp;
                <a href="https://github.com/Erma-T/contact-form-frontendmentor" target="_blank">Git Repo</a> &nbsp;&nbsp;| &nbsp;&nbsp; 
                <a href="https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj" target="_blank">Challenge</a></p>
          </div>
        
        </div>

      </div>

    </div>
  );
}
