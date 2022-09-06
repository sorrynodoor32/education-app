import React from "react";
import { testimonal } from "../../../../dummydata";
import Title from "../../title/Title";
import "./style.css"

const Test = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Title subtitle="testimonal" title="our successful studens" />
          <div className="content grid2">
            {testimonal.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt=""></img>
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
