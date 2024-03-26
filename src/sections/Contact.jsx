import React from "react";
import { useNav } from "../hooks/useNav";

const Contact = () => {
  const contactRef = useNav("Contact");
  return (
    <section ref={contactRef} id='contactSection'>
      <h2>Contact</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus labore
        maxime harum debitis nisi praesentium earum id rem quae ipsum.
      </p>
    </section>
  );
};

export default Contact;
