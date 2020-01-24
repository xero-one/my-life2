import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "../../pages/Home";
import MySkills from "../../pages/MySkills";
  import SoftwareEngineer from "../../pages/SoftwareEngineer";
  import ArtDesign from "../../pages/ArtDesign";
  import AudioProduction from "../../pages/AudioProduction";
  import VideoProduction from "../../pages/VideoProduction";

import Credentials from "../../pages/Credentials";
import Contact from "../../pages/Contact";
import "./navBar.css";
import "./navBar.js";

class NavBar extends Component() {
  render() {
    return(
      <NavBar>
        <Router>
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


          
            <React.Fragment>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />

                <Route exact path="/my-skills" component={MySkills} />
                    <Route exact path="/my-skills/software-engineering" component={SoftwareEngineer} />
                    <Route exact path="/my-skills/art-and-design" component={ArtDesign} />
                    <Route exact path="/my-skills/audio-production" component={AudioProduction} />
                    <Route exact path="/my-skills/video-production" component={VideoProduction} />

                <Route exact path="/credentials" component={Credentials} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </React.Fragment>
          </div>
        </Router>
     </NavBar> 
  );}
};

export default NavBar;