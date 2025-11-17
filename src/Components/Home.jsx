import BlurText from "./BlurText";

function Home() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section id="home">

      {/* Background Image */}
      <img
        src="/img2 (4).jpg"
        className="home-image"
        alt="Coding workspace"
        loading="lazy"
      />

      <div className="home-overlay">

        {/* Social Handles */}
        <div className="handle">
          <a href="https://github.com/ArunKumarWebDeveloper" target="_blank">
            <img id="git" src="handle (1).png" />
          </a>
          <a href="https://www.linkedin.com/in/arun-kumar-r-920841235" target="_blank">
            <img id="linked" src="handle (2).png" />
          </a>
          <div id="mail">
            <a href="mailto:arunlokesh78@gmail.com" target="_blank">
              <img src="handle (3).png" />
            </a>
          </div>
        </div>

        {/* Main Animated Text */}
        <BlurText
          className="text-type"
          text="ARUN KUMAR R"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />

        <BlurText
          className="text-p"
          text="Turning ideas into clean, modern code."
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />

        {/* Button */}
        <button
          className="hire"
          onClick={() =>
            window.open("/White and Black Simple Resume.pdf", "_blank")
          }
        >
          HIRE <img src="right.png" alt="Right Arrow" />
        </button>

      </div>

    </section>
  );
}

export default Home;
