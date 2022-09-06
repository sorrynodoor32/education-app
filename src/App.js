import React from "react";
import Header from "./components/common/heading/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/common/home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Price from "./components/pricing/Price";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/courses" exact>
            <CourseHome />
          </Route>
          <Route path="/team" exact>
            <Team />
          </Route>
          <Route path="/pricing" exact>
            <Price />
          </Route>
          <Route path="/journal" exact>
            <Blog />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
