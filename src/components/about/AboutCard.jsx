import React from "react";
import { homeAbout } from "../../dummydata";
import Title from "../common/title/Title";
import AWrapper from "./AWrapper";
import "./about.css";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./about.webp" alt=""></img>
          </div>
          <div className="right row">
            <Title
              subtitle="LEARN ANYTHING"
              title="Benefit About Online Learning Expertise"
            />
            <div className="items">
              {homeAbout.map((val) => (
                <div className="item flexSB">
                  <div className="img">
                    <img src={val.cover} alt=""></img>
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default AboutCard;
