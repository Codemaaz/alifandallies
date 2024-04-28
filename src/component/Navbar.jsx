import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between p-5 px-8 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex items-center">
          <img className="w-14 m-2 " src={Logo} alt="!Alif And Allies" />
          <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
            Alif & Allies
            <p className="font-semibold text-lg">
              One step construction solution
            </p>
          </Link>
        </div>

        <nav className=" md:bg-white rounded-lg bg-lighBackground items-center text-center justify-center flex gap-5 font-medium mt-2 p-3 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-primary transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-primary transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-primary transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-primary transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
