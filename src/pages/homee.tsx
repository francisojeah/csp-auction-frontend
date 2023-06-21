import AutionItemList from "@/components/AutionItemList";
import Banner from "@/components/Banner";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Sponsors from "@/components/Sponsors";
import ConditionalRoute from "@/routes/ConditionalRoute";
import moment from "moment";
import { useSession } from "next-auth/react";
import React from "react";

const Homee = ({ items }: any) => {
  const { data: session } = useSession();
  return (

      <>
        <NavBar />
        <Banner />
        <CountdownTimer eventTime={moment("2023-06-17 12:00:00")} />
        <AutionItemList />
        <Sponsors />
        <Footer />
      </>
  );
};

export default Homee;
