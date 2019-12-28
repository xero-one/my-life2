import React from "react";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import MySkills from "./pages/MySkills";
  import SoftwareEngineer from "./pages/SoftwareEngineer";
  import ArtDesign from "./pages/ArtDesign";
  import AudioProduction from ".pages/AudioProduction";
  import VideoProduction from ".pages/VideoProduction";

import Credentials from "./pages/Credentials";
import Contact from "./pages/Contact-Me";

const App = () => {
return (
    <Global>
      <Router>
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
      </Router>
    </Global>
  );
};

export default App;