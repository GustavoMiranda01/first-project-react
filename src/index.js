import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/globalStyle";
import Routes from "./routes"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<><Routes /> <GlobalStyle /></>);
