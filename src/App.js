import React from "react";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import HomePage from "./pages/Home";
import MySkillsPage from "./pages/MySkillsPage";
  import SoftwareEngineerPage from "./pages/SoftwareEngineerPage";
  import ArtDesignPage from "./pages/ArtDesignPage";
  import AudioProductionPage from "./pages/AudioProductionPage";
  import VideoProductionPage from "./pages/VideoProductionPage";

import CredentialsPage from "./pages/CredentialsPage";
import ContactPage from "./pages/ContactPage";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Chad Gresham",
      headerLinks: [
        {
          title: "Home", 
          path: "/"
        },
        {
          title: "My Skills",
          path: "/my-skills"
        },
        {
          title: "Software Engineering",
          path: "/my-skills/software-engineering"
        },
        {
          title: "Art & Design",
          path: "/my-skills/art-and-design"
        },
        {
          title: "Audio Production",
          path: "/my-skills/audio-production"
        },
        {
          title: "Video Production",
          path: "/my-skills/video-production"
        },
        {
          title: "Credentials",
          path: "/credentials"
        },
        {
          title: "Contact",
          path: "/contact"
        }
      ]
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
            <Switch>
              <Route exact path="/" exact render={() => <homePage> title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} </homePage>} component={HomePage} />
              <Route exact path="/home" exact render={() => <homePage> title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} </homePage>} component={HomePage} />

              <Route exact path="/my-skills" component={MySkillsPage} />
               <Route exact path="/my-skills/software-engineering" component={SoftwareEngineerPage} />
               <Route exact path="/my-skills/art-and-design" component={ArtDesignPage} />
               <Route exact path="/my-skills/audio-production" component={AudioProductionPage} />
               <Route exact path="/my-skills/video-production" component={VideoProductionPage} />

               <Route exact path="/credentials" component={CredentialsPage} />
               <Route exact path="/contact" component={ContactPage} />
            </Switch>
        </React.Fragment>
      </Router>
    );
  }
};

export default App;

