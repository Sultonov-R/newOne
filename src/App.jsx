import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Automation from "./components/Automation/Automation";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Marketers from "./components/Marketers/Marketers";
import Partners from "./components/Partners/Partners";
import Steps from "./components/Steps/Steps";

function App() {
  return (
    <div>
      <div className="wrapper container">
        <div className="first-section">
          <Header />
          <Hero />
          <AboutUs />
        </div>
      </div>
      <Automation />
      <div className="wrapper container">
        <div className="stepss">
        <Steps />
        </div>
        <Partners />
      </div>
      <Marketers />
      <Footer />
    </div>
  );
}

export default App;
