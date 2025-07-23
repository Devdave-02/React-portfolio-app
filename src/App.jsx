import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  // Update theme when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="app">
      <div className="header">
        <h1 className="Header-text">
          <span className="p">P</span>ortfo.
        </h1>
        <button
          className="light-button"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </div>

    
      <div className="hero-container">
        <div className="herotext">
          <p>
            <span className="Text1">Hello, I'm David. </span>
            <span className="Text1">A Software Engineer.</span>
            <span className="Text2">
              I’m passionate about technology and committed to continuous learning.<br />
              My goal is to build user-friendly web applications, contribute,<br />
              to impactful projects, and grow into a skilled<br />
              full-stack developer.
            </span>
          </p>
          <div>
            <a href="/Resume - Okanlawon David Ibukunoluwa.pdf" target="_blank" download>
              <button className="buttontext">Download Resume</button>
            </a>
          </div>
        </div>
        <img className="Image" src="/47-512.webp" alt="icon" />
      </div>

      <div className="Aboutme-container">
        <img className="Personal-image" src="/DSC_1116.jpg" alt="David" />
        <p className="About-text">
          <span className="Abouttext-1">About me</span>
          <span className="Abouttext-2">
            I currently work with HTML, CSS, JavaScript, and React, <br />
            and I'm diving deeper into backend development.<br />
            When I’m not coding, I enjoy teaching, reading, and <br />
            collaborating on meaningful tech projects.
          </span>
        </p>
      </div>

      <div className="project-container">
        <div className="Project-header">
          <p>Projects Completed.</p>
        </div>

        <div className="Project-grids">
          <Project
            title="Mapejoy Farm Website"
            description="A clean, modern site promoting farm sponsorship and sustainable milk production through a cost-efficient circular system."
            tech="HTML, CSS, JavaScript, React"
            link="https://react-farm-app.vercel.app/"
          />
          <Project
            title="Amazon Clone"
            description="A functional e-commerce clone with product listings, shopping cart, and checkout experience."
            tech="HTML, CSS, JavaScript"
            link="https://devdave-02.github.io/final-amazon-project/"
          />
          <Project
            title="Telecom Website"
            description="A professional telecom service site with service plans, modern UI, and contact form."
            tech="HTML, CSS, JavaScript"
            link="https://devdave-02.github.io/Telecom-web/"
          />
          <Project
            title="Bussiness Consulting"
            description="A responsive WordPress site showcasing Mapejoy Consulting’s smart, simple, and sustainable solutions."
            tech="Wordpress"
            link="https://oladave3.wordpress.com/"
          />
        </div>
      </div>

      <div className="footer-container">
        <div className="Foot-con1">
          <p className="foot-text1">Have a project in mind?</p>
          <p className="foot-text2">Let’s build something together.</p>
        </div>

        <div className="foot-con2">
          <p
            className="foot-text3"
            onClick={() =>
              window.open('https://mail.google.com/mail/?view=cm&fs=1&to=davidokanla69@gmail.com', '_blank')
            }
          >
            davidokanla69@gmail.com
          </p>
          <button className="button">Get in touch</button>
          <a className="phone" href="tel:08103420613">
            08103420613
          </a>
        </div>

        <p className="reserved">© 2025 Okanlawon David Ibukunoluwa. All rights reserved.</p>
      </div>
    </div>
  );
}

// Reusable Project Card Component
function Project({ title, description, tech, link }) {
  return (
    <div className="grid">
      <h3 className="Grid-header">{title}</h3>
      <p className="Grid-text">{description}</p>
      <p className="Grid-text2">Tech: {tech}</p>
      {link && (
        <a className="Grid-text3" href={link} target="_blank" rel="noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}

export default App;

