import React from "react";

const AboutMe = ({ isLightTheme, setIsLightTheme }) => {
  return (
    <section id="aboutMe" data-aos="fade-down" data-aos-duration="2000">
      <img
        className={isLightTheme ? "leftImageDull" : "leftImage"}
        src="images/3d-illustration-hand-and-code-png-removebg-preview.png"
        alt="Left part"
      />
      <div className="rightDescription">
        <p id="rightHeading" className="rightHeading">
          Hey, I am Aman. Glad you landed here!!{" "}
        </p>
        <p
          id="rightSubDescription"
          className={
            isLightTheme ? "rightSubDescription-dark" : "rightSubDescription"
          }
        >
          I'm an engineer driven by creativity, constantly pushing boundaries to
          build websites that are both functional and visually stunning while
          expanding my skills along the way.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
