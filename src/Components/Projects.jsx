function Projects() {
  return (
   <section id="projects" className="section3">
    <h2>Projects</h2>
    <p>Here are some of my projects that showcase my skills and creativity.</p>
    <div className="projects-container">
    <div className="project-card">
      <h3>Weather + To-do-list </h3>
      <img src="/weather.png" alt="Project 1" class="project-image" loading="lazy" />
       <p>A simple website to check weather and plan daily task using to-do list.</p>
     <div class="project-buttons">
     <a href="https://planweather.netlify.app/" target="_blank" class="site-link">View Site</a>
     <a href="https://github.com/ArunKumarWebDeveloper/Weather-Planner" target="_blank" class="github-link">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon" />
      </a>
      </div>
      </div>

      <div className="project-card">
        <h3>FLAVORFIND</h3>
        <img src="/project2.png" alt="Project 2" class="project-image" loading="lazy" />
        <p>A Food-Recipe website to search and prepare your next favorite food.</p>
      <div class="project-buttons">
     <a href="https://your-live-site.com" target="_blank" class="site-link">View Site</a>
     <a href="https://github.com/ArunKumarWebDeveloper/FlavorFind" target="_blank" class="github-link">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon" />
      </a>
      </div>
      </div>

      <div className="project-card">
        <h3>Book Library</h3>
        <img src="/landing.png" alt="Project 4" class="project-image" loading="lazy" />
        <p>A Book Library website to search favourite Books online.</p>
       <div class="project-buttons">
      <a href="https://your-live-site.com" target="_blank" class="site-link">View Site</a>
      <a href="https://github.com/ArunKumarWebDeveloper/Book-Library" target="_blank" class="github-link">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon" />
    </a>
    </div>
     </div>
    </div>
  </section>
  );
}

export default Projects;
