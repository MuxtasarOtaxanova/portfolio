import "./Hero.css";
import portfolio_img from "../../assets/portfolio_img.jpg";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={portfolio_img} alt="" />
      <h1>
        <span>I'm Muxtasar Otaxanova,</span> frontend developer based in
        Uzbekistan
      </h1>
      <p>I am a frontend developer from Namangan, Uzbekistan with ... year</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact">Connect With Me</a>
        </div>
        <div className="hero-resume">
          <a href="#mywork">My resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
