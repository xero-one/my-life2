import React, { Component } from 'react';
import ReactDOM from "react-dom";
import NavBar from "../components/navBar/navBar.js";

const element = <h1>This is a test</h1>;
console.log(element);

class Home extends Component {
render(){
    return(
        <NavBar>
        <div className={"text-center"}>
             <a href="/login"><button>Sign In</button></a>
            <a href="/signup"><button>Sign Up</button></a>
        </div>
        </NavBar>
    )
}
}

export default Home;