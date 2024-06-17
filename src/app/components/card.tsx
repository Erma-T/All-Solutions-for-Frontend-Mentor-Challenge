"use client";

import React from "react";
import { WobbleCard } from "@/app/components/ui/wobble-card";

export function Card() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full min-h-[500px] lg:min-h-[300px]"
        className="grid grid-rows-7"
      >
        <div  className="row-span-3 w-full ">
          <div className="w-[18rem] h-[8.5rem] bg-cover bg-center bg-no-repeat bg-[url('/screenshots/desktop-preview.jpg')]">
            
          </div>
        </div>
        <div  className="row-span-1 w-full pl-[1rem] py-[0.2rem] justify-center">
          <h2 className="text-left font-semibold text-white">
            QR Code Compnent
          </h2>

        </div>
        <div  className="row-span-2 w-full px-[1rem]">
          <p className="text-left text-sm font-light text-white">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
          <span className="text-left text-xs italic font-light mx-1 text-white">#HTML</span>
          <span className="text-left text-xs italic font-light mx-1 text-white">#CSS</span>

        </div>
        <div  className="flex flex-wrap px-[1rem] row-span-1 w-full justify-center">
          <p className="text-left text-sm font-light text-white"><a href="">Live Demo</a>| <a>Git Repo</a> | <a>Challenge</a></p>


        </div>
        
      </WobbleCard>
      
      
      
    </div>
  );
}
