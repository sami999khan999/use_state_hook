// // UseState

// // useState is a hook in React, introduced in React 16.8, that allows you to add state to functional components. Before the introduction of hooks, state management was primarily done in class components using this.state. useState simplifies state management in functional components, making them more powerful and versatile. //

//============================================================================================================================================//

// // more detaild in ./component/UseState.jsx

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
