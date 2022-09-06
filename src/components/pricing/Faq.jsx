import React, { useState } from "react";
import { faq } from "../../dummydata";
import Title from "../common/title/Title";

const Faq = () => {
  const [click, setClick] = useState(false);

  const toogle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <>
      <Title subtitle="FAQS" title="Frequently Ask Question" />
      <section className="faq">
        <div className="container">
          {faq.map((val, index) => (
            <div className="box">
              <button
                className="accordion"
                onClick={() => toogle(index)}
                key={index}
              >
                <h2>{val.title}</h2>
                <span>
                  {click === index ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-right"></i>
                  )}
                </span>
              </button>
              {click === index ? (
                <div className="text">
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
