import React from "react";
import { useNav } from "../hooks/useNav";

const About = () => {
  const aboutRef = useNav("About");
  return (
    <section ref={aboutRef} id='aboutSection'>
      <h2>About</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde
        eveniet praesentium illum animi hic nulla accusamus quo. Id,
        accusantium.
      </p>
    </section>
  );
};

export default About;
