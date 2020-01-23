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

class App extends React.Component {

  constructor(props) { 
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
}



export default App;