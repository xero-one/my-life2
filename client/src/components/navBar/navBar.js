import React from "react";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from "./pages/Home";
import MySkills from "./pages/MySkills";
  import SoftwareEngineer from "./pages/SoftwareEngineer";
  import ArtDesign from "./pages/ArtDesign";
  import AudioProduction from ".pages/AudioProduction";
  import VideoProduction from ".pages/VideoProduction";

import Credentials from "./pages/Credentials";
import Contact from "./pages/Contact";
import "./Navbar.css";
import "./navBar.js";

class Navbar extends React.component() {
  render() {
    return(
      <NavBar>
        <Router>
          <div>
            <nav>
              <p>CG</p>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/my-skills">My Skills</Link>
                    <ul>
                        <li>
                          <Link to="/my-skills/software-engineering">Software Engineering</Link>>
                        </li>
                        <li>
                          <Link to="/my-skills/art-and-design">Art & Design</Link>>
                        </li>
                        <li>
                          <Link to="/my-skills/audio-production">Audio Production</Link>
                        </li>
                        <li>
                          <Link to="/my-skills/video-production">Video Production</Link>
                        </li>
                    </ul>
                </li>
                <li>
                  <Link to="/credentials">Credentials</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
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

export default navBar;