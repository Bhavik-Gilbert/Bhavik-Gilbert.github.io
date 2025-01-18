import React from 'react';

import  { closeElements } from '../../../../../setup/components/displayControls';

function WebRobotController() {
  return (
    <div className="overlayInfo" id="webInterfaceControlRobot">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["projectHighlightsOverlay", "webInterfaceControlRobot"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Web Interface To Control ROS Robot</h1>
        <h3>- ROS & Flask & React Project -</h3>
      </div>

      <a href="./files/projects/Bhavik Gilbert Final Year Project Web interface to interact with the TIAGo robot - Controller.pdf" type="submit" target="_blank" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/PDFLogo.png" alt="PDF" loading="lazy"/>
          &nbsp;
          Research Paper
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/react.png" alt="React" loading="lazy"/>

      <hr/>

      <h6>ROS | React | Flask | Node </h6>

      <hr/>

      <h6>Explanation/Demo Video (Skip to 7:02 for Demo)</h6>
      <iframe title="Web Interface To Control ROS Robot Presentation" width="100%" height="50%" src="https://www.youtube.com/embed/EU4MIpCM8JE"/>

      <hr/>

      <h6>Project Aims</h6>
      <p>
        This project aims to create an easy to use, reliable and quickly accessible web interface to
        control and interact with a robot developed using the Robot Operating System (ROS). This
        would allow users to control their robot with a more accessible device such as a smartphone
        or laptop, connected over a more stable LAN connection, with a friendlier web interface. This
        project will focus on developing the platform for a single model of robot, TIAGo, which could
        then be easily expanded upon to work for other kinds of robots developed using the Robot
        Operating System (ROS).
      </p>

      <br/>

      <h6>Delivered Features</h6>
      <ul>
        <li>Web interface for all control actions</li>
        <li>Control over movement</li>
        <li>Emergency Stop</li>
        <li>Proximity detection and crash prevention</li>
        <li>Text to speech</li>
        <li>Performing actions</li>
        <li>Server connection sessions</li>
        <li>Notifications</li>
        <li>Search for pre-defined inputs</li>
      </ul>
    </div>
  );
}


function GreggorFinancialCompanion() {
  return (
    <div className="overlayInfo" id="greggorFinancialCompanion">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["projectHighlightsOverlay", "greggorFinancialCompanion"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Greggor Financial Companion</h1>
        <h5>Financial Tracker</h5>
        <h3>- Django Project -</h3>
      </div>
      
      <a href="https://github.com/Bhavik-Gilbert/Greggor-Financial-Companion" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>
      <a href="https://greggorfinancialcompanion.pythonanywhere.com/" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/WebLogo.jpg" alt="Link" loading="lazy"/>
          &nbsp;
          Live Site
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/javascript.png" alt="Javascript" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/CSS.png" alt="CSS" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/html.png" alt="HTML" loading="lazy"/>

      <hr/>

      <h6>Django | PIL | CurrencyConverter | Tabula | Pandas | Numpy</h6>

      <hr/>

      <h6>7 Collaborators</h6>
      <ul>
        <li><a href="https://www.linkedin.com/in/reshma-dhillon-6ba5b21a2/" className="link" target="_blank" rel="noreferrer">Reshma Dhillon</a></li>
        <li><a href="https://www.mishahigham.co.uk/" className="link" target="_blank" rel="noreferrer">Michael Higham</a></li>
        <li><a href="https://www.linkedin.com/in/kushaagra-kapoor-2b0167219/" className="link" target="_blank" rel="noreferrer">Kushaagra Kapoor</a></li>
        <li><a href="https://mpalmer8.github.io/" className="link" target="_blank" rel="noreferrer">Matthew Palmer</a></li>
        <li><a href="https://www.linkedin.com/in/sahitya-sakthivel-08299a213/" className="link" target="_blank" rel="noreferrer">Sahitya Sakthivel</a></li> 
        <li><a href="https://www.linkedin.com/in/louisa-scott-98718725a/" className="link" target="_blank" rel="noreferrer">Louisa Scott</a></li>
        <li><a href="https://www.linkedin.com/in/charles-suddens-spiers-281317255/" className="link" target="_blank" rel="noreferrer">Charles Suddens-Spiers</a></li>
      </ul>

      <hr/>

      <p>Financial tracker web application, enabling users to track expenditures across multiple banks, categories and currencies</p>
      <ul>
        <li>Incorporates a full suite of automated unit tests</li>
      </ul>
      <br/>

      <p>Transactions</p>
      <ul>
        <li>Users can log a transaction directly, inputting an amount, currency, sender, receiver, optional category, optional description and optional file upload</li>
        <li>They may also opt to upload them in bulk for the month by uploading their bank statement</li>
        <li>Standing orders and subscriptions can be created with the same, information as a transaction alongside a start date, end date, and interval, which will log that given interval between the dates provided</li>
      </ul>

      <br/>

      <p>Monetary Accounts</p>
      <ul>
        <li>These are split into merchant accounts, pot accounts and bank accounts</li>
        <li>Merchant accounts don't have a balance, and transactions relating to these won't contribute to a users total spending</li>
        <li>Pot accounts are basic saving/spending spaces</li>
        <li>Bank accounts are an extension of a pot account used to refer to an actual bank account, with added information such as interest rate and bank name</li>
        <li>You can view interest projections for any bank accounts with a positive balance</li>
      </ul>

      <br/>

      <p>Spending & Saving Targets</p>
      <ul>
        <li>Users can set spending and savings targets for different time intervals and currencies</li> 
        <li>They can be set to a monetary account, category or user</li>
        <li>Appropriate warnings are given for nearing or reaching a target</li>
      </ul>

      <br/>

      <p>Spending Summary</p>
      <ul>
        <li>Users can view a summary of their spending for a given time period and currency</li>
        <li>They can view graphs displaying overall spending alongside how much they've spent per category</li>
      </ul>

      <br/>

      <p>User Groups</p>
      <ul>
        <li>To motivate the user to create and stick to targets, users are able to enter groups with other users, where they can view a live ranking, scoring based on users nearing or surpassing targets at that point in time, with negative scoring for overspending</li>
        <li>It is intended for use between family and friends</li>
      </ul>

      <br/>

      <p>Financial Quiz</p>
      <ul>
        <li>Users can partake in a financial quiz, to help them gain a better understanding of some fundamentals of finances</li>
        <li>It is designed to encourage users to retake tests they fail and to allow users to partake no matter how much time they have, with the user being able to dictate the number of questions they are given</li>
      </ul>
    </div>
  );
}


function RoboticStoreroomInventoryScanner() {
  return (
    <div className="overlayInfo" id="roboticStoreroomInventoryScanner">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["projectHighlightsOverlay", "roboticStoreroomInventoryScanner"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Robotic Storeroom Inventory Scanner</h1>
        <h3>- ROS Project -</h3>
      </div>

      <a href="https://github.com/Bhavik-Gilbert/ROS-Room-Inventory-Scanner" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>

      <hr/>

      <h6>ROS | SMACH | YOLO</h6>

      <hr/>

      <p>
        Our robot, a TurtleBot3, is working in a store doing the inventory of items overnight. 
        It must go around the building noting the items it sees. The owner is interested in all items, but in one above all: cake. 
        The inventory robot must navigate on a specific pattern while reporting the objects that it sees, until it finds cake.
      </p>

      <ul>
        <li>Development of a ROS robotics application using concurrent SMACH states, an Action Server and the YOLO image recognition neural network</li>
        <li>The TurtleBot3 navigates to a specified room, then moves around the room, continuously scanning the environment around it</li>
        <li>Using the YOLODetector library, the feed images are then scanned for items, and fed back to the user as a list of items found and the quantity of each item seen</li>
        <li>This process is continued until item specified is found, in this case is cake, where it then outputs the final list of items encountered in the room alongside the quantity of each item seen and the time taken to find the specified item</li>
      </ul>
    </div>
  );
}


function FacialRecognitionLoginSystem() {
  return (
    <div className="overlayInfo" id="facialRecognitionLoginSystem">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["projectHighlightsOverlay", "facialRecognitionLoginSystem"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Facial Recognition Login System</h1>
        <h3>- AI with Database Systems -</h3>
      </div>

      <a href="https://github.com/Bhavik-Gilbert/Facial-Recognition" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>
      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/SQL.png" alt="SQL" loading="lazy"/>

      <hr/>

      <h6>Tkinter | PIL | CV2 | TensorFlow | MYSQL Connector</h6>

      <hr/>

      <p>The development of a facial recognition user login system, storing user information and images, alongside taking, manipulating and analysing images using a facial recognition model.
      </p>
      
      <p>Usage:</p>
      <ul>
        <li>Users signup</li>
        <li>Take and upload image of themselves</li>
        <li>Validates image meets requirements:</li>
        <ul>
            <li>At least 1 face required</li>
            <li>Maximum 1 face identified</li>
        </ul>
        <li>On login:</li>
        <ul>
            <li>New image is taken with the same requirements</li>
            <li>Face checked against existing images for user</li>
            <li>User logged in if it reaches an adequate match rate</li>
            <li>If logged in, new image will be added to database for future accesses</li>
        </ul>
      </ul>
    </div>
  );
}


function PhaseFoldingKeplerExoplanets() {
  return (
    <div className="overlayInfo" id="phaseFoldingKeplerExoplanets">
      <div className="topRight">
        <div className="file button marginLeft" onClick={(e) => closeElements(["projectHighlightsOverlay", "phaseFoldingKeplerExoplanets"])}>
          &#10005;
        </div>
      </div>

      <div className="infoHeader">
        <h1>Phase Folding Kepler Exoplanet Luminosity</h1>
        <h3>- Data Analysis & Graphical Manipulation -</h3>
      </div>

      <a href="https://github.com/Bhavik-Gilbert/Kepler-Data" type="submit" target="_blank" rel="noreferrer" className="file button justify-content-center text-center">
          <img className="skeleton fileImage small" src="./images/logos/GithubLogo.png" alt="Github" loading="lazy"/>
          &nbsp;
          Repository
      </a>

      <hr/>

      <img className="skeleton fileImage small marginRight my-2" src="./images/techLogos/python.png" alt="Python" loading="lazy"/>

      <hr/>

      <h6>Numpy | Matplotlib</h6>

      <hr/>

      <p>A program run by QMUL to calculate the radius and orbital period of an exoplanet from the change in luminosity of the star it's orbiting using phase folding.</p>
      <ul>
        <li>Data used from the Kepler mission</li>
        <li>Analyse and manipulate star luminosity data to produce the phase fold on the change in luminosity</li>
        <li>Calculating the orbital period</li>
        <ul>
          <li>Use phase fold to determine the length of time the star luminosity dips</li>
          <li>Take luminosity dipping time as 1/2 an orbital period due to star visibility from sensors</li>
          <li>Double luminosity dipping time to determine the orbital period</li>
        </ul>
        <li>Calculating radius</li>
        <ul>
          <li>Use phase fold to determine the dip in the star's luminosity via exoplanet orbital cover</li>
          <li>Use the percentage dip in the star's luminosity to calculate the radius of the exoplanet</li>
          <li>Above uses the luminosity equation of star and planet to substitute for the radius</li>
        </ul>
      </ul>
    </div>
  );
}


function ProjectHighlightsInfo() {
  return (
    <div className="overlayBackground" id="projectHighlightsOverlay">
      <WebRobotController/>
      <GreggorFinancialCompanion/>
      <RoboticStoreroomInventoryScanner/>
      <FacialRecognitionLoginSystem/>
      <PhaseFoldingKeplerExoplanets/>
    </div>
  );
}

export default ProjectHighlightsInfo