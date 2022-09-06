/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15338.752703326672!2d108.2259013!3d16.02973995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1662471527721!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      <Back title="Contact US" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS: </h4>
                <p>198 west 21st street, suite 7 NewYork NY 10016</p>
              </div>
              <div className="box">
                <h4>Email: </h4>
                <p>info@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE: </h4>
                <p>+123 456 789</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
              </div>
              <input type="email" placeholder="Subject"></input>
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
