import React from "react";
import { Link } from "react-router-dom";
import { PiDiamondFill } from "react-icons/pi";
import img1 from "../images/peb.jpg";
import img2 from "../images/residential structur.jpg";
import img3 from "../images/Low budget accommodation.jpg";
import img4 from "../images/wall partition.jpg";

const Gallery = () => {
  return (
    <>
      <div className="mt-5 flex flex-col justify-center items-center text-center gap-3">
        <h2 className=" uppercase font-bold text-xl md:text-3xl">
          Project We Serve
        </h2>
        <p className="text-yellow-400 drop-shadow ">
          <PiDiamondFill />
        </p>
        <p className="md:text-base text-sm font-normal">
          At Alif & Allies we have multiple areas of expertise
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4 w-4/5 mx-auto align-middle text-center ">
        <div className=" bg-amber-300 hover:bg-amber-200 hover:scale-105 transition-all rounded-md border h-fit flex flex-col items-center justify-center p-2 lg:p-4 ">
          <p className=" uppercase text-base lg:text-xl font-medium w-full rounded-lg"> PEB and Industrial Shed</p>
          <img className="p-2" src={img1} alt="img" />
        </div>
        <div className=" bg-amber-300 hover:bg-amber-200 hover:scale-105 transition-all rounded-md border h-fit flex flex-col items-center justify-center p-2 lg:p-4 ">
          <p className=" uppercase text-base lg:text-xl font-medium w-full rounded-lg"> RESIDENTIAL STRUCTURE</p>
          <img className="p-2" src={img2} alt="img" />
        </div>
        <div className=" bg-amber-300 hover:bg-amber-200 hover:scale-105 transition-all rounded-md border h-fit flex flex-col items-center justify-center p-2 lg:p-4 ">
          <p className=" uppercase text-base lg:text-xl font-medium w-full rounded-lg"> LOW BUDGET ACCOMMODATION</p>
          <img className="p-2" src={img3} alt="img" />
        </div>
        <div className=" bg-amber-300 hover:bg-amber-200 hover:scale-105 transition-all rounded-md border h-fit flex flex-col items-center justify-center p-2 lg:p-4 ">
          <p className=" uppercase text-base lg:text-xl font-medium w-full rounded-lg"> LOW BUDGET ACCOMMODATION</p>
          <img className="p-2" src={img4} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
