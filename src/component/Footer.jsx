import React from "react";
import { MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row px-2 justify-around pt-10 relative -bottom-5">
      <div className=" text-sm md:text-lg leading-10">
        <h3 className=" uppercase font-semibold">Quick contact info</h3>
        <p>
          <span>
            <MdLocationOn className=" inline text-secondary mx-2 " />
          </span>
          444/K/1, P. 266, Near Mirza Garden, Dhule, 424001
        </p>
        <p>
          <span>
            <MdOutlineEmail className=" inline text-secondary mx-2 " />
          </span>
          contact@alifandallies.com
        </p>
        <p>
          <span>
            <MdPhone className=" inline text-secondary mx-2 " />
          </span>
          +91 7798 7798 36
        </p>
      </div>
      <div className=" text-center my-14">
        All rights reserved. © 2022 Alif & Allies
      </div>
    </div>
  );
};

export default Footer;
