import React from "react";

import PriceCard from "../../pricing/PriceCard";
import Title from "../title/Title";

const Hprice = () => {
  return (
    <>
      <section className="hprice">
        <Title subtitle="our pricing" title="pricing $ package" />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;
