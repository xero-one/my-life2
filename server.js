/*Name of the application*/
const nameOfApp = "my-life";

/*Set global constant to use third-party library express*/
const express = require("express");

const routes = require("./routes");

const path = require("path");

/*Configure our port by seting it to a variable*/
const PORT = process.env.PORT || 3000;

/*Set our app to call express everytime this variable is called*/
const app = express();

/*Add routes, both API and view*/
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*Serve up static assets (usually on heroku)*/
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

/*Start the API server*/
app.listen(PORT, function() {
    console.log(`What's up 🌎  ==> Your "${nameOfApp}" project server is now listening on PORT ${PORT}!`);
  });
  
/*Webpack configuration*/
/*
module.exports = {
    entry: {
      app: "./client/src/App.js"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "Home.js",
      publicPath: "/"
    },
    module: {
      rules: [
        { test: /\.(js)$/, use: "babel-loader" },
        { test: /\.css$/, use: [ "style-loader", "css-loader" ]}
      ]
    },
    devServer: {
      historyApiFallback: true,
    }
  };
*/