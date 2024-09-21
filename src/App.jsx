import { useState } from "react";
import About from "./Componets/About/About";
import Campus from "./Componets/Campus/Campus";
import Contact from "./Componets/Contact/Contact";
import Footer from "./Componets/Footer/Footer";
import Hero from "./Componets/Hero/Hero";
import Navbar from "./Componets/Navbar/Navbar";
import Programs from "./Componets/Programs/Programs";
import Testimonials from "./Componets/Testimonials/Testimonials";
import Title from "./Componets/Title/Title";
import VideoPlayer from "./Componets/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="our Program" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="contact us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
