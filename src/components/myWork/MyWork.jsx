import "./MyWork.css";
import mywork_data from "../../assets/index.js";
const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="mywork-wrapper">
              <img key={index} src={work.w_img} alt="" />
              <h3>{work.w_name}</h3>
              <p>
                <a target="_blank" href={work.w_url} className="mywork-link">
                  Saytga o'tish
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
