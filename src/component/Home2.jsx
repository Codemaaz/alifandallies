import React from "react";
import img from "../images/home2.png";
import Button from "../layout/Button";
import { Link } from "react-router-dom";
const Home2 = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col md:flex-row md:justify-between items-center "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className=" md:px-56 p-8 flex flex-col justify-center bg-opacity-75 h-fit md:h-screen bg-black  text-white ">
          <h2 className=" text-3xl md:text-4xl font-semibold leading-tight">
            <span className="text-brightGreen">Explore the Features</span>
            <br />
            Our Mission: Building Excellence, Delivering Value
          </h2>
          <p className=" mt-5 text-sm md:text-base text-justify">
            Our mission is simple yet profound: to be the leading force in the
            construction industry, driving excellence through innovation,
            superior craftsmanship, and unparalleled commitment to our clients.
            We believe in building not just structures, but trust and lasting
            relationships.
          </p>

          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="Contact Us" />
          </Link>
        </div>
      </div>
    </>
  );
};

// <p className="text-xl">
//   Our mission is simple yet profound: to be the leading force in the
//   construction industry, driving excellence through innovation,
//   superior craftsmanship, and unparalleled commitment to our clients.
//   We believe in building not just structures, but trust and lasting
//   relationships.
// </p>
export default Home2;
