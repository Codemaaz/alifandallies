import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Services from "./component/Services";
import Services2 from "./component/Services2";
import Footer from "./component/Footer";
import Contact from "./component/Contact.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <header>
            <Navbar />
          </header>

          <main>
            <div id="home">

            <Home />
            </div>
            <div id="services">

            <Services />
            <Services2 />
            </div>
            <Contact />
          </main>
          <footer>
            <Footer />
          </footer>
      </BrowserRouter>
      ,
    </>
  );
};

export default App;
