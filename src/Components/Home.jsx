import BlurText from "./BlurText";

function Home() {
 const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <section id="home" >
      <img src="/img2 (4).jpg" className="home-image" alt="Coding workspace" loading="lazy" ></img>
      <div className="home-overlay">
        
        <div className="handle">
        <a href="https://github.com/ArunKumarWebDeveloper"><img id="git" src="handle (1).png"></img></a>
        <a href="https://www.linkedin.com/in/arun-kumar-r-920841235"><img id="linked" src="handle (2).png"></img></a>
        <div id="mail">
        <a href="mailto:arunlokesh78@gmail.com"><img  src="handle (3).png"></img></a>
        </div>
        </div>

<BlurText className="text-type"
  text="ARUN KUMAR R"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
/>

<BlurText className="text-p"
  text="Turning ideas into clean, modern code."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
/>

<button className="hire"  onClick={() => window.open("/White and Black Simple Resume.pdf", "_blank")}
> HIRE <img src="right.png" alt="Right Arrow"></img></button>
      </div>
    </section>
  );
}

export default Home;
