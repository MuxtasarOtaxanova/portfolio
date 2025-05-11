import "./About.css";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              optio quae totam atque maxime laborum eum odit beatae sed rem ex
              saepe? Consectetur enim pariatur commodi, quidem maiores dolor
              cum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              corporis commodi dolores debitis. Blanditiis, in qui nisi
              assumenda aliquam saepe.
            </p>{" "}
          </div>
        </div>
      </div>{" "}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3month+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
