import React from 'react';

function ProjectInfo() {
  return (
    <div className="overlayInfo">
      <div className="topRight">
        <a href="https://www.linkedin.com/in/bhavik-gilbert-2349631a9/" type="submit" target="_blank" className="file">
            <img className="skeleton fileImage small button" src="./images/logos/LinkedInLogo.png" alt="LinkedIn" loading="lazy"/>
        </a>

        <a href="https://github.com/Bhavik-Gilbert?tab=repositories" type="submit" target="_blank" className="file">
            <img className="skeleton fileImage button small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
        </a>
        <div className="file button marginLeft">
          &#10005;
        </div>
      </div>

      <h1>Title</h1>
      <h3>- Subtitle -</h3>

      <hr/>
    </div>
  );
}

export default ProjectInfo;