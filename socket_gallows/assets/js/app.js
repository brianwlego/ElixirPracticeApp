const _css = require("../css/app.scss");
import "phoenix_html"
import Greeter from "./greeter";
import "./hangman_app"
import React from "react";
import ReactDOM from "react-dom"


const greeting = document.getElementById("greeting");
ReactDOM.render( <Greeter name="Phoenix" />, greeting );
