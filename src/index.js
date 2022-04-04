import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";
import ContextWrapper from "./components/utilities/Context";

ReactDOM.render(
    <React.StrictMode>
        {/* 05... wrapping components that get 
        context data */}
        <ContextWrapper>
            <App />
        </ContextWrapper>
    </React.StrictMode>,
    document.getElementById("root")
);

// ReactDOM.render(
//     <Router>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </Router>,
//     document.getElementById("root")
// );
