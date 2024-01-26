import React, { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamBurgerMenu";
import { Link } from "react-scroll";
import sound from "./PortfolioBGM.mp3";

const Top = ({ isLightTheme, setIsLightTheme }) => {
  const handleTheme = () => {
    const body = document.getElementsByTagName("BODY")[0];
    body.classList.toggle("lightModeBody");
    setIsLightTheme(!isLightTheme);
  };
  const [audio] = useState(new Audio(sound));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <div className={isLightTheme ? "lightModeTop" : "top"}>
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>

      <nav className={isLightTheme ? "navbarLight" : "navbar"} id="navbar">
        <h2 class="name">Aman Ap</h2>
        <div class="navbar-links">
          <Link
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
            to={isLightTheme ? "projects" : "projectsDark"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-links"
          >
            Projects
            <svg
              width="80"
              height="7"
              viewBox="0 0 83 7"
              fill="none"
              class="nav-links-svg"
              // display={"none"}
            >
              <path
                d="M1.36658 3.43961C5.25984 2.21819 9.10198 2.35113 13.042 1.74498C16.5973 1.19801 20.2829 1.33594 23.9226 1.33594C27.3725 1.33594 30.9056 1.5463 34.2891 1.5463C35.5441 1.5463 37.2693 2.05276 38.3912 2.55139C39.6341 3.10379 41.4642 3.25919 42.8089 3.4513C44.602 3.70745 46.3029 3.86034 48.1616 3.86034C49.0606 3.86034 49.9761 3.43961 50.9081 3.43961C51.4475 3.43961 52.841 3.17686 53.3273 2.97213C55.1318 2.21235 56.3597 3.3818 57.5346 4.49145C58.2657 5.18187 59.2379 3.46932 60.0123 3.18249C60.9779 2.82484 61.679 2.53519 62.4783 3.33443C62.7994 3.65557 63.8588 5.51258 64.3716 5.22773C65.485 4.60917 66.7235 4.15447 67.7258 3.33443C69.0587 2.24383 71.3278 2.48068 73 2.38777C74.4626 2.30652 75.525 2.05998 77 2.38777C77.7415 2.55256 78.7556 2.38777 79.518 2.38777C80.2804 2.38777 81.1728 1.74498 82 1.74498"
                stroke="hsl(53deg, 100%, 50%)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Link>
          <Link
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
            to={isLightTheme ? "experience" : "experienceDark"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-links"
          >
            Achievements
            <svg
              width="103"
              height="7"
              viewBox="0 0 103 7"
              fill="none"
              class="nav-links-svg"
              // display={"none"}
            >
              <path
              
                d="M1.36658 3.43961C5.25984 2.21819 9.10198 2.35113 13.042 1.74498C16.5973 1.19801 20.2829 1.33594 23.9226 1.33594C27.3725 1.33594 30.9056 1.5463 34.2891 1.5463C35.5441 1.5463 37.2693 2.05276 38.3912 2.55139C39.6341 3.10379 41.4642 3.25919 42.8089 3.4513C44.602 3.70745 46.3029 3.86034 48.1616 3.86034C49.0606 3.86034 49.9761 3.43961 50.9081 3.43961C51.4475 3.43961 52.841 3.17686 53.3273 2.97213C55.1318 2.21235 56.3597 3.3818 57.5346 4.49145C58.2657 5.18187 59.2379 3.46932 60.0123 3.18249C60.9779 2.82484 61.679 2.53519 62.4783 3.33443C62.7994 3.65557 63.8588 5.51258 64.3716 5.22773C65.485 4.60917 66.7235 4.15447 67.7258 3.33443C69.0587 2.24383 71.3278 2.48068 73 2.38777C74.4626 2.30652 75.525 2.05998 77 2.38777C77.7415 2.55256 78.7556 2.38777 79.518 2.38777C80.2804 2.38777 81.1728 1.74498 82 1.74498 "
                stroke="hsl(53deg, 100%, 50%)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Link>
          <Link
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
            to="techStackNav"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-links"
          >
            Skills
            <svg
              width="60"
              height="7"
              viewBox="0 0 83 7"
              fill="none"
              class="nav-links-svg"
              // display={"none"}
            >
              <path
                d="M1.36658 3.43961C5.25984 2.21819 9.10198 2.35113 13.042 1.74498C16.5973 1.19801 20.2829 1.33594 23.9226 1.33594C27.3725 1.33594 30.9056 1.5463 34.2891 1.5463C35.5441 1.5463 37.2693 2.05276 38.3912 2.55139C39.6341 3.10379 41.4642 3.25919 42.8089 3.4513C44.602 3.70745 46.3029 3.86034 48.1616 3.86034C49.0606 3.86034 49.9761 3.43961 50.9081 3.43961C51.4475 3.43961 52.841 3.17686 53.3273 2.97213C55.1318 2.21235 56.3597 3.3818 57.5346 4.49145C58.2657 5.18187 59.2379 3.46932 60.0123 3.18249C60.9779 2.82484 61.679 2.53519 62.4783 3.33443C62.7994 3.65557 63.8588 5.51258 64.3716 5.22773C65.485 4.60917 66.7235 4.15447 67.7258 3.33443C69.0587 2.24383 71.3278 2.48068 73 2.38777C74.4626 2.30652 75.525 2.05998 77 2.38777C77.7415 2.55256 78.7556 2.38777 79.518 2.38777C80.2804 2.38777 81.1728 1.74498 82 1.74498"
                stroke="hsl(53deg, 100%, 50%)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Link>
          <Link
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
            to={isLightTheme ? "contactMe" : "contactMeDark"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-links"
          >
            Socials
            <svg
              width="70"
              height="7"
              viewBox="0 0 83 7"
              fill="none"
              class="nav-links-svg"
              // display={"none"}
            >
              <path
                d="M1.36658 3.43961C5.25984 2.21819 9.10198 2.35113 13.042 1.74498C16.5973 1.19801 20.2829 1.33594 23.9226 1.33594C27.3725 1.33594 30.9056 1.5463 34.2891 1.5463C35.5441 1.5463 37.2693 2.05276 38.3912 2.55139C39.6341 3.10379 41.4642 3.25919 42.8089 3.4513C44.602 3.70745 46.3029 3.86034 48.1616 3.86034C49.0606 3.86034 49.9761 3.43961 50.9081 3.43961C51.4475 3.43961 52.841 3.17686 53.3273 2.97213C55.1318 2.21235 56.3597 3.3818 57.5346 4.49145C58.2657 5.18187 59.2379 3.46932 60.0123 3.18249C60.9779 2.82484 61.679 2.53519 62.4783 3.33443C62.7994 3.65557 63.8588 5.51258 64.3716 5.22773C65.485 4.60917 66.7235 4.15447 67.7258 3.33443C69.0587 2.24383 71.3278 2.48068 73 2.38777C74.4626 2.30652 75.525 2.05998 77 2.38777C77.7415 2.55256 78.7556 2.38777 79.518 2.38777C80.2804 2.38777 81.1728 1.74498 82 1.74498"
                stroke="hsl(53deg, 100%, 50%)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
        <div class="icons">
          <i
            id="toggleLight"
            style={{ cursor: "pointer" }}
            className={
              isLightTheme
                ? "fa-solid fa-sun toggleLight"
                : "fa-solid fa-moon toggleLight"
            }
            onClick={handleTheme}
          ></i>

          <i
            onClick={() => setIsPlaying(!isPlaying)}
            id="toggleSound"
            style={{ cursor: "pointer" }}
            className={
              isPlaying ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark"
            }
          ></i>
          <HamburgerMenu
            isLightTheme={isLightTheme}
            setIsLightTheme={setIsLightTheme}
          />
        </div>
      </nav>
      <svg viewBox="0 0 1340 319" className="svgClass">
        <path
          className={isLightTheme ? "lightModeSvg" : "svgPath"}
          fill=" hsl(210deg, 30%, 8%)"
          fill-opacity="1"
          d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,186.7C560,203,640,213,720,213.3C800,213,880,203,960,197.3C1040,192,1120,192,1200,192C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      <img
        className={isLightTheme ? "sittingBoyLight" : "sittingBoy"}
        src="images/me-light.png"
        alt="Sitting Boy"
      />
    </div>
  );
};

export default Top;
