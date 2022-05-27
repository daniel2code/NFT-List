import React from "react";
import Navbar from "../../common/navbar/index";
import Hero from "./hero/index";
import Sponsored from "./sponsored/index"
import Popular from "./popular/index"
import FAQ from "./faq/index"
import Footer from "../../common/footer/index"

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsored />
      <Popular />
      <FAQ />
      <Footer />
    </>
  );
};

export default Index;
