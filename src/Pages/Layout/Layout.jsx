import React from "react";
import Homepage from "../Homepage/Homepage";
import Event from "../Event/Event";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import TimelineWithAnimations from "../Timeline/Timeline";

const Layout = () => {
  return (
    <>
      <Homepage />
      <About />
      <Event />
      <TimelineWithAnimations />
      <Gallery />
    </>
  );
};

export default Layout;
