import React from "react";
import { online } from "../../dummydata";
import Title from "../common/title/Title";

const OnlineCourses = () => {
  return (
    <>
      <div className="online">
        <div className="container">
          <Title subtitle="COURSES" title="Browse Our Online Course" />
          <div className="content grid3">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt=""></img>
                  <img src={val.hoverCover} className="show" alt=""></img>
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineCourses;
