import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Banner from './../components/homeComponents/Banner'
import Testimonials from "../components/homeComponents/Testimonials";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <Banner/>
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <Testimonials />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
