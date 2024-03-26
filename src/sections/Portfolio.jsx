import React from "react";
import { useNav } from "../hooks/useNav";

const Portfolio = () => {
  const portfolioRef = useNav("Portfolio");
  return (
    <section ref={portfolioRef} id='portfolioSection'>
      <h2>Portfolio</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        similique nisi error corporis suscipit esse accusantium ratione tenetur
        ut laboriosam.
      </p>
    </section>
  );
};

export default Portfolio;
