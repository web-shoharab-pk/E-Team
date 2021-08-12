import React from "react";
import OurService from "../OurService/OurService"; 
import Reviews from "../Reviews/Reviews";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar"; 

const MainHome = () => {
  
  return (
    <>
      <Navbar />
      <Hero /> 
      <OurService />
      <Reviews />
      <Footer />
    </>
  );
};

export default MainHome;
