import React, { useState } from "react";
import SideBar from "./Sidebar";
import PROJECTS_DATA from "./Project_Data";

const Projects = ({ isLightTheme, setIsLightTheme }) => {
  //   const asideRef = useRef();

  //   const handleClick = () => {
  //     console.log(asideRef.current);
  //     asideRef.current.style = "display: block";
  //   };

  const [show, setShow] = useState(false);
  const [projectData, setProjectData] = useState([]);

  //   PROJECTS_DATA.map((data) => console.log(data.title));

  return (
    <section id={isLightTheme ? "projects" : "projectsDark"}>
      <p class="projectsHeading">Projects</p>
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
      <p class="projectsSubHeading">
        I've worked with countless web and mobile apps across various
        industries, and eventually, I took on the challenge of designing and
        building my own.
      </p>
      <div className="sc-gZMcBi jwbuPS">
        {PROJECTS_DATA.map((data) => (
          <>
            <div
              style={{ background: `${isLightTheme ? "#7AC7F7" : "#1A242C"}` }}
              className="project-div"
            >
              <div
                className="project-div-image"
                style={{
                  background: `url(${data.imageUrl})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="project-div-right">
                <h1>{data.title}</h1>
                <p>{data.about}</p>
                {data.technologies && (
                  <p className="d-flex flex-wrap">
                    {data.technologies.map((tech, index) => (
                      <span
                        style={{
                          fontSize: "15px",
                          backgroundColor: "rgb(105, 104, 105)",
                          color: "#fff",
                          margin: "2px",
                          padding: "4px",
                          transition: "1s ease",
                        }}
                        key={index}
                        className="b-block mb-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </p>
                )}
                {/* <FontAwesomeIcon icon="fa-solid fa-book-open" /> */}
                <p
                  onClick={() => {
                    setProjectData(data);
                    setShow(true);
                    const skills =
                      document.getElementsByClassName("techStack")[0];
                    skills.style.opacity = "0";
                  }}
                  className="click-to-open"
                >
                  Click to open
                </p>
              </div>
            </div>
            {/* <div

              role="gridcell"
              id="cardHover"
              tabindex="0"
              className="sc-jTzLTM dFqYWZ"
              onClick={() => {
                setProjectData(data);
                setShow(true);
                const skills = document.getElementsByClassName("techStack")[0];
                skills.style.opacity = "0";
              }}
              style={{ background: "url($`{data.imageUrl}`)" }}
            >
              <div id="stars-group-1"></div>
        <div id="stars-group-2"></div>
        <div id="stars-group-3"></div>
              <img src={data.imageUrl} className="cardImage" alt="projectImg" />
              <div class="content__slate">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <p class="d-flex flex-wrap">
                  {data.technologies.map((tech) => (
                    <span style={{ margin: "2px" }} class="d-block mb-1">
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
            </div> */}
          </>
        ))}
        <div id="stars-group-1"></div>

        <SideBar
          setShow={setShow}
          show={show}
          data={projectData}
          isLightTheme={isLightTheme}
        />
      </div>
    </section>
  );
};

export default Projects;
