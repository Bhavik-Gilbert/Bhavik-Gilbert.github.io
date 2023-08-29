import React from 'react';

import './footer.css';

function Footer() {
  return (
    <div className="d-flex justify-content-center text-center">
      <div className="Footer">
        <h5>Feel free to get in contact with me</h5>
        <br/>
        <h6>bhaviklob@hotmail.com</h6>

        <a href="https://www.linkedin.com/in/bhavik-gilbert-2349631a9/" type="submit" target="_blank" className="file">
            <img className="fileImageSmall" src="./images/logos/LinkedInLogo.png" alt="pdf logo"></img>
        </a>

        <a href="https://github.com/Bhavik-Gilbert?tab=repositories" type="submit" target="_blank" className="file">
            <img className="fileImageSmall" src="./images/logos/GithubLogo.png" alt="pdf logo"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;