/*Name of the application*/
const nameOfApp = "my-life";

/*Set global constant to use third-party library express*/
const express = require("express");

const routes = require("./routes");

/*Configure our port by seting it to a variable*/
const PORT = process.env.PORT || 3000;

/*Set our app to call express everytime this variable is called*/
const app = express();

/*Add routes, both API and view*/
app.use(routes);

/*Serve up static assets (usually on heroku)*/
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

/*Start the API server*/
app.listen(PORT, function() {
    console.log(`What's up 🌎  ==> Your "${nameOfApp}" project server is now listening on PORT ${PORT}!`);
  });
  

  module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js",
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
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "app/index.html"
      })
    ]
  };
