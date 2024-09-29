import React, { useRef } from "react";
import confetti from "canvas-confetti"; 
const ContactMe = ({ isLightTheme, setIsLightTheme }) => {
  // const handleTheme = () => {
  //   const contactMe = document.getElementsByClassName("contactMe")[0];
  //   contactMe.classList.toggle("contactMeDark");
  //   const contactMeDescription = document.getElementsByClassName(
  //     "contactMeDescription"
  //   )[0];
  //   contactMeDescription.toggle("contactMeDescriptionDark");
  //   const handcraftedBy = document.getElementsByClassName("handcraftedBy")[0];
  //   handcraftedBy.classList.toggle("handcraftedByDark");

  //   setIsLightTheme(!isLightTheme);
  // };
  const soundRef = useRef(null);
  const defaults = {
    disableForReducedMotion: true,
  };
  const fire = (particleRatio, opts) => {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(200 * particleRatio),
      })
    );
  };
  const confettiExplosion = (origin) => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      origin,
    });
    fire(0.2, {
      spread: 60,
      origin,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      origin,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      origin,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      origin,
    });
  };
  const handleConfettiClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    const origin = {
      x: center.x / window.innerWidth,
      y: center.y / window.innerHeight,
    };

    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current.play();
    }
    confettiExplosion(origin);
  };

  return (
    <div className={isLightTheme ? "contactMe" : "contactMeDark"}>
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
      <div className="contactMeUpDiv">
        <div id="stars-group-1"></div>
        <div id="stars-group-2"></div>
        <div id="stars-group-3"></div>
        <p className="startAProject">Start a project</p>
        <p className="startAProjectDescription">
          Interested in working together? We should queue up a time to chat.
        </p>{" "}
        <a
          style={{ textDecoration: "none" }}
          className="letsDoThisButton"
          href="mailto:amanasstudent@gmail.com"
        >
          <div> Let's Do This</div>
        </a>
      </div>

      <div
        className={
          isLightTheme ? "contactMeDescription" : "contactMeDescriptionDark"
        }
      >
        Living, learning, & leveling up one day at a time.
      </div>

      <div className="socialLinks">
        <a
          href="https://twitter.com/Aman__Ap"
          className={isLightTheme ? "socialLinkDiv" : "socialLinkDivDark"}
        >
          <i
            className={
              isLightTheme
                ? "fa-brands fa-twitter links"
                : "fa-brands fa-twitter linksDark"
            }
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/aman-pathak-original/"
          className={isLightTheme ? "socialLinkDiv" : "socialLinkDivDark"}
        >
          <i
            className={
              isLightTheme
                ? "fa-brands fa-linkedin links"
                : "fa-brands fa-linkedin linksDark"
            }
          ></i>
        </a>
        <a
          href="https://github.com/AmanApT"
          className={isLightTheme ? "socialLinkDiv" : "socialLinkDivDark"}
        >
          <i
            className={
              isLightTheme
                ? "fa-brands fa-github links"
                : "fa-brands fa-github linksDark"
            }
          ></i>
        </a>
        <a
          href="mailto:amanasstudent@gmail.com"
          className={isLightTheme ? "socialLinkDiv" : "socialLinkDivDark"}
        >
          <i
            className={
              isLightTheme
                ? "fa-solid fa-envelope links"
                : "fa-solid fa-envelope linksDark"
            }
            s
          ></i>
        </a>
      </div>
          
      <div className={isLightTheme ? "handcraftedBy" : "handcraftedByDark"}>
        <p>Handcrafted by me © Aman Pathak</p>
      </div>
      <div className="celebrate">
      <audio ref={soundRef} id="sound" src="../../celebrate.mp3"></audio> {/* Add your sound file path */}
      <button className="js-confetti" onClick={handleConfettiClick}>
      <img
        style={{width:"2rem"}}
         src="images/celebrate.png"
        alt="Celebrate"
      />
      </button>
    </div>
    </div>
  );
};

export default ContactMe;
