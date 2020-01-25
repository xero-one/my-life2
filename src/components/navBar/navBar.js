import React from "react";
import { BrowserRouter as Link } from 'react-router-dom';
import "./navBar.css";
import "./navBar.js";

function NavBar(props) {
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
  );
};

export default NavBar;