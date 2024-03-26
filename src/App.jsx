import Header from "./components/Header";
import Home from "./sections/Home";
import Profile from "./sections/Profile";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { NavContextProvider } from "./context/NavContext";

const App = () => {
  return (
    <div>
      <NavContextProvider>
        <Header />
        <Home />
        <Profile />
        <Portfolio />
        <About />
        <Contact />
      </NavContextProvider>
    </div>
  );
};

export default App;
