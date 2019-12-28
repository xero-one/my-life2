import React from "react";
import ReactRouter from "react-router";
import ReactDOM from 'react-dom';
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
    

            <Route exact path="/credentials" component={Credentials} />
            <Route exact path="/contact" component={Contact} />


            <Route path="/community" component={Community} />
            <Route path="/community-job-detail" component={CommunityJobDetail} />
            {/* <Route path="/community-saved-detail" component={CommunitySavedDetail} /> */}

            <Route path="/employer-posts" component={EmployerPosts} />
            <Route path="/employer-job-detail" component={EmployerJobDetail} />

            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
      </Router>
    </Global>
  );
};

export default App;