import AutionItemList from "@/components/AutionItemList";
import Banner from "@/components/Banner";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Sponsors from "@/components/Sponsors";
import moment from "moment";
import React from "react";



const Homee = ( {items} : any) => {
  return (
    <>
      <NavBar />
      <Banner />
      <CountdownTimer eventTime={moment("2023-06-17 12:00:00")} />
      <AutionItemList items={items} />
      <Sponsors />
      <Footer />
    </>
  );
};

export default Homee;
