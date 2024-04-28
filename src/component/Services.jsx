import React from "react";
import { PiDiamondFill } from "react-icons/pi";
import landWork from "../images/land work and foundation.png";
import rawStructure from "../images/raw structure.png";
import finishing from "../images/finishing and interior work.jpg";


const Services = () => {
  return (
    <div className=" shadow-lg pb-1 md:p-3" id="services">
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <h2 className=" uppercase font-bold text-xl md:text-3xl">
          Best Construction services
        </h2>
        <p className="text-secondary drop-shadow ">
          <PiDiamondFill />
        </p>
        <p className="md:text-base text-sm font-normal">Our Services</p>
      </div>

      <div className=" text-center grid place-items-center m-7 md:mx-40 md:grid-cols-3 gap-4">

        <div class="max-w-sm rounded overflow-shadow-lg p-2 border-2 border-black hover:scale-105 duration-500">
          <img src={landWork} alt="land work png" className="rounded-lg drop-shadow-md w-[400px] h-[200px]" />
          <div class="px-6 py-4 bg-lighBackground">
            <div class="font-semibold text-xl my-2 uppercase md:h-10">
              Land work and Foundation
            </div>
            <p class=" text-base text-justify">
              A building's raw structure refers to its basic, skeletal
              framework, typically made of structural components like columns,
              beams, and load-bearing walls. This framework forms the foundation
              upon which the building's complete structure is constructed.
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-shadow-lg p-2 border-2 border-black hover:scale-105 duration-500">
          <img src={rawStructure} alt="rawStructure image" className="rounded-lg drop-shadow-md w-[400px] h-[200px]" />
          <div class="px-6 py-4 bg-lighBackground">
            <div class="font-semibold text-xl my-2 uppercase md:h-10">
              Raw Structure
            </div>
            <p class=" text-base text-justify">
              A building's raw structure refers to its basic, skeletal
              framework, typically made of structural components like columns,
              beams, and load-bearing walls. This framework forms the foundation
              upon which the building's complete structure is constructed.
              
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-shadow-lg p-2 border-2 border-black hover:scale-105 duration-500">
          <img src={finishing} alt="finishing image" className="rounded-lg drop-shadow-md w-[400px] h-[200px]" />
          <div class="px-6 py-4 bg-lighBackground">
            <div class="font-semibold text-xl my-2 uppercase md:h-10">
              Finishing and interior work
            </div>
            <p class=" text-base text-justify">
              Finishing and interior work in construction refers to the final
              stages of a building project where the focus shifts from the
              structural aspects to the aesthetics, functionality, and comfort
              of the interior spaces.
              <p> <br /></p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
