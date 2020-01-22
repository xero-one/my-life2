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

import SVG, {React, Circle, Text} from "react-native-svg"


render(){
  return (
    <div style={styles.container}>
      <svg width="300" height="200">
          <Rect width="100%" height="100%" fill="red" />
          <Circle cx="150" cy="100" r="80" fill="green" />
          <p x="150" y="125" font-size="60">Hello World</p> 
      </svg>
      </div>
  )
};

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