
import { useState } from "react";
import NavElement from "../../Components/NavElement/NavElement";
import HomePage from "../../Components/Pages/HomePage";
import AboutPage from "../../Components/Pages/AboutPage";
import Services from "../../Components/Pages/Services";
import TrainingConsult from "../../Components/Pages/TrainingConsult";
// import Portfolio from "./Components/Pages/Portfolio";
import Carrers from "../../Components/Pages/Carrers";
import ContactPage from "../../Components/Pages/ContactPage";
import ContactThrough from "../../Components/Pages/ContactThrough";
import Portfolio2 from "../../Components/Pages/Portfolio2";
import StatTalk from "../../Components/Pages/StartTalk";
import Footer from "../../Components/Pages/Footer";
function Home() {
  return (
    <div className="Home">
      <NavElement />
      <HomePage />
      <AboutPage />
      <Services />
      <TrainingConsult />
      <Portfolio2 />
      {/* <Portfolio /> */}
      <Carrers />
      <StatTalk />
      <ContactPage />
      <ContactThrough />
      <Footer />
    </div>
  );
}

export default Home;