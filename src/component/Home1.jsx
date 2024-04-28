import React from "react";
import img from "../images/home.png";
import Button from "../layout/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <div className=" h-auto max-w-full">
        <img src={img} alt="img" className="opacity-70" />
      </div> */}

      <div
        className="bg-cover bg-no-repeat flex flex-col md:flex-row md:justify-between items-center "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className=" md:px-56 p-8 md:p-1 flex flex-col justify-normal h-fit md:h-screen md:justify-center bg-opacity-75 bg-black text-white ">
          <h2 className=" text-3xl md:text-4xl font-semibold leading-tight">
            <span className="text-brightGreen"> Construction Industry</span>
            <br /> Alif & Allies - Building the Future, One step at a Time
          </h2>
          <p className=" mt-5 text-sm md:text-base text-justify">
            At Alif & Allies, we're more than just builders; we're creators of
            dreams, architects of progress, foundation for a better tomorrow.
            Our passion for construction extends beyond bricks and mortar; it's
            about turning visions into reality, enhancing communities, and
            leaving a lasting legacy.
          </p>

          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact Us" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
