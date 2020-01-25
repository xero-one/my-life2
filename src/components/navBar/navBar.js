import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "../../pages/HomePage";
import MySkills from "../../pages/MySkillsPage";
  import SoftwareEngineer from "../../pages/SoftwareEngineerPage";
  import ArtDesign from "../../pages/ArtDesignPage";
  import AudioProduction from "../../pages/AudioProductionPage";
  import VideoProduction from "../../pages/VideoProductionPage";

import Credentials from "../../pages/CredentialsPage";
import Contact from "../../pages/ContactPage";
import "./navBar.css";
import "./navBar.js";

class NavBar extends Component {
  render() {
    return(
      <NavBar>
          <div className={"nav-body"} id={"nav-body"}> 
            <nav>
              <div>
                <h4 className={"logo"}>CG</h4>
              </div>
              <div>
                <ul className={"nav-links"}>
                  <li>
                    <Link className={"a-tag"} to="/">Home</Link>
                  </li>
                  <li>
                    <Link className={"a-tag"} to="/my-skills">My Skills</Link>
                      <ul>
                          <li>
                            <Link className={"a-tag"} to="/my-skills/software-engineering">Software Engineering</Link>
                          </li>
                          <li>
                            <Link className={"a-tag"} to="/my-skills/art-and-design">Art and Design</Link>
                          </li>
                          <li>
                            <Link className={"a-tag"} to="/my-skills/audio-production">Audio Production</Link>
                          </li>
                          <li>
                            <Link className={"a-tag"} to="/my-skills/video-production">Video Production</Link>
                          </li>
                      </ul>
                  </li>
                  <li>
                    <Link className={"a-tag"} to="/credentials">Credentials</Link>
                  </li>
                  <li>
                    <Link className={"a-tag"} to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>


          
          </div>
     </NavBar> 
  );}
};

export default NavBar;