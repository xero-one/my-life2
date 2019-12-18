/*Name of the application*/
const nameOfApp = "my-life";

/*Set global constant to use third-party library express*/
const express = require("express");

/*Set our app to call express everytime this variable is called*/
const app = express();


// Start the API server
app.listen(PORT, function() {
    console.log(`What's up 🌎  ==> ${nameOfApp} Sever is now listening on PORT ${PORT}!`);
  });
  