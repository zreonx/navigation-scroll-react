import { useNav } from "../hooks/useNav";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <section ref={homeRef} id='homeSection'>
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        molestias saepe, minima cum qui dolores architecto praesentium fugit
        nobis impedit.
      </p>
    </section>
  );
};

export default Home;
