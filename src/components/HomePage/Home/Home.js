import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PricingPlan from "../../PricingPlan/PricingPlan";
import Testimonials from "../Testimonials/Testimonials";
import WhyUs from "../WhyUs/WhyUs";


const Home = () => {
  const renderHeader = {
    showHeader: 'home',
  }
  return (
    <>
      <Header renderHeader={renderHeader} />
      <AboutUs></AboutUs>
      <PricingPlan></PricingPlan>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <WhyUs></WhyUs>
      <Footer></Footer>
      
    </>
  );
};

export default Home;
