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
              My name is Muxtasar Otaxanova, a passionate and motivated web
              developer with a solid foundation in front-end technologies
              including HTML, CSS, JavaScript, and React. I have successfully
              completed training in these technologies and am currently
              expanding my skills by learning Node.js to become a full-stack
              developer.
            </p>
            <p>
              I am dedicated to continuous learning and growth, and I am
              currently preparing to begin teaching web development at ALgoritm
              Education Center in the near future. Sharing knowledge and helping
              others grow in the tech field is something I deeply care about.
              Outside of coding, I enjoy creating videos and reading books,
              which help me stay creative and inspired. I’m excited to take on
              new challenges and contribute to meaningful projects that make a
              positive impact.
            </p>
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
